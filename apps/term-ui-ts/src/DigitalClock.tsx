import React, { useState, useEffect, FC } from 'react';
import { Box, Text, useStdout } from 'ink';
import axios from 'axios';

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

interface Person {
  name: string;
  height: string;
  mass: string;
}

const DigitalClock: FC = () => {
  const [time, setTime] = useState(new Date());
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const { write } = useStdout();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Spinner animation
    const spinnerChars = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];
    let i = 0;
    const spinnerInterval = setInterval(() => {
      if (loading) {
        write(`\r${spinnerChars[i]} Loading Star Wars characters...`);
        i = (i + 1) % spinnerChars.length;
      } else {
        // Clear the spinner line when loading is complete
        write('\r\x1b[K');
        clearInterval(spinnerInterval);
      }
    }, 80);

    // Fetch SWAPI people data
    axios
      .get('https://swapi.dev/api/people/?page=1&page_size=20')
      .then((response) => {
        setPeople(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching SWAPI data:', error);
        setLoading(false);
      });

    return () => {
      clearInterval(timer);
      clearInterval(spinnerInterval);
    };
  }, []); // Add empty dependency array here

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
      {/* Add empty Box components for vertical spacing */}
      <Box marginY={1} />
      <Text>Press Ctrl+C to exit</Text>

      {/* Display SWAPI people data */}
      <Box marginY={1} />
      <Text>Star Wars Characters:</Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        people.map((person, index) => (
          <Text key={index}>
            {person.name} - Height: {person.height}, Mass: {person.mass}
          </Text>
        ))
      )}
    </Box>
  );
};

export default DigitalClock;
