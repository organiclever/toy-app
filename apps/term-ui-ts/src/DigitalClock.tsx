import React, { useState, useEffect } from 'react';
import { Text } from 'ink';

interface DigitalClockProps {
  initialTime?: Date;
  updateInterval?: number; // Add this prop for testing
}

const DigitalClock: React.FC<DigitalClockProps> = ({
  initialTime,
  updateInterval = 1000,
}) => {
  const [time, setTime] = useState(initialTime || new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => new Date(prevTime.getTime() + updateInterval));
    }, updateInterval);

    return () => clearInterval(timer);
  }, [updateInterval]);

  return <Text>{time.toLocaleTimeString()}</Text>;
};

export default DigitalClock;
