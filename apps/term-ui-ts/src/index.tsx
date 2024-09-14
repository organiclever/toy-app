import React, { useState, useEffect, FC } from 'react';
import { render, Box, Text } from 'ink';

const bigDigits = [
  [' ███ ', '█   █', '█   █', '█   █', ' ███ '], // 0
  ['  █  ', ' ██  ', '  █  ', '  █  ', ' ███ '], // 1
  [' ███ ', '    █', ' ███ ', '█    ', '█████'], // 2
  [' ███ ', '    █', ' ███ ', '    █', ' ███ '], // 3
  ['█   █', '█   █', '█████', '    █', '    █'], // 4
  ['█████', '█    ', '█████', '    █', '█████'], // 5
  [' ███ ', '█    ', '█████', '█   █', ' ███ '], // 6
  ['█████', '    █', '   █ ', '  █  ', ' █   '], // 7
  [' ███ ', '█   █', ' ███ ', '█   █', ' ███ '], // 8
  [' ███ ', '█   █', '█████', '    █', ' ███ '], // 9
];

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

  const renderBigDigits = (timeString: string) => {
    const digits = timeString
      .split('')
      .map((char) => (char === ':' ? 10 : parseInt(char, 10)));
    return Array(5)
      .fill(0)
      .map((_, row) => (
        <Text key={row}>
          {digits.map((digit, index) => (
            <Text key={index} color={digit === 10 ? 'yellow' : 'green'}>
              {digit === 10
                ? row === 1 || row === 3
                  ? ' ● '
                  : '   '
                : bigDigits[digit][row]}
            </Text>
          ))}
        </Text>
      ));
  };

  return (
    <Box flexDirection="column" alignItems="center">
      {renderBigDigits(time.toLocaleTimeString('en-US', { hour12: false }))}
      <Text>Press Ctrl+C to exit</Text>
    </Box>
  );
};

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
      <DigitalClock />
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
