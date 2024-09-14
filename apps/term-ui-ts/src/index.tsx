import React, { useState, useEffect, FC } from 'react';
import { render, Box, Text } from 'ink';

const DigitalClock: FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box flexDirection="column">
      <Text>{time.toLocaleTimeString()}</Text>
      <Text>Press Ctrl+C to exit</Text>
    </Box>
  );
};

const App: FC = () => {
  return (
    <Box flexDirection="column">
      <Text>Digital Clock</Text>
      <DigitalClock />
    </Box>
  );
};

render(<App />);
