import React, { useState, useEffect, FC } from 'react';
import { Box, Text } from 'ink';

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
            <React.Fragment key={index}>
              <Text color={digit === 10 ? 'yellow' : 'green'}>
                {digit === 10
                  ? row === 1 || row === 3
                    ? ' ● '
                    : '   '
                  : bigDigits[digit][row]}
              </Text>
              {index < digits.length - 1 && <Text> </Text>}
            </React.Fragment>
          ))}
        </Text>
      ));
  };

  return (
    <Box flexDirection="column" alignItems="center">
      {renderBigDigits(time.toLocaleTimeString('en-US', { hour12: false }))}
      <Box height={1} />
      <Text>Press Ctrl+C to exit</Text>
      <Box height={1} />
    </Box>
  );
};

export default DigitalClock;
