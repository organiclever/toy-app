import React, { useState, useEffect, FC } from 'react';
import { render, Box, Text, useInput, useStdin } from 'ink';

const DigitalClock: FC = () => {
  const [time, setTime] = useState(new Date());
  const [exit, setExit] = useState(false);
  const { stdin, setRawMode } = useStdin();

  useEffect(() => {
    // Clear the screen and hide the cursor
    if (stdin) {
      setRawMode(true);
      process.stdout.write('\x1b[2J\x1b[0f');
      process.stdout.write('\x1b[?25l');
    }

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
      // Show the cursor again when component unmounts
      if (stdin) {
        process.stdout.write('\x1b[?25h');
        setRawMode(false);
      }
    };
  }, [stdin]);

  useInput((input) => {
    if (input.toLowerCase() === 'q') {
      setExit(true);
    }
  });

  if (exit) {
    process.exit(0);
  }

  return (
    <Box flexDirection="column">
      <Text>{time.toLocaleTimeString()}</Text>
      <Text>Press 'q' to exit</Text>
    </Box>
  );
};

render(<DigitalClock />);
