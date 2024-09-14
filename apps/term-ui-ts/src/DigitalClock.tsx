import React from 'react';
import { Text } from 'ink';

const DigitalClock: React.FC = () => {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Text>{time.toLocaleTimeString()}</Text>;
};

export default DigitalClock;
