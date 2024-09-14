import React, { useEffect, FC } from 'react';
import { render, Box, Text } from 'ink';
import DigitalClock from './DigitalClock.js';
import StarWarsCharacters from './StarWarsCharacters.js';

const App: FC = () => {
  useEffect(() => {
    console.clear(); // Clear the terminal when the app mounts

    // Show cursor when component unmounts
    return () => {
      process.stdout.write('\x1B[?25h');
    };
  }, []);

  return (
    <Box flexDirection="column" alignItems="center">
      <Text bold>Digital Clock</Text>
      <Box marginBottom={1} />
      <DigitalClock />
      <StarWarsCharacters />
    </Box>
  );
};

// Clear the terminal before rendering
console.clear();

// Ensure cursor is shown when the process exits
process.on('exit', () => {
  process.stdout.write('\x1B[?25h');
});

// Handle SIGINT (Ctrl+C)
process.on('SIGINT', () => {
  process.stdout.write('\x1B[?25h');
  process.exit();
});

render(<App />);
