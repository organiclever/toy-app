import React, { useState, useEffect } from 'react';
import { Box, Text } from 'ink';

interface Character {
  name: string;
  height: string;
  mass: string;
}

const StarWarsCharacters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://swapi.dev/api/people/');
        const data = await response.json();
        setCharacters(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Star Wars characters:', error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []); // Empty dependency array to run only once

  if (loading) {
    return <Text>Loading Star Wars characters...</Text>;
  }

  return (
    <Box flexDirection="column">
      <Text>Star Wars Characters:</Text>
      {characters.map((character, index) => (
        <Box key={index} flexDirection="column" marginTop={1}>
          <Text>Name: {character.name}</Text>
          <Text>Height: {character.height}</Text>
          <Text>Mass: {character.mass}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default StarWarsCharacters;
