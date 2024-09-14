import React from 'react';
import DigitalClock from './DigitalClock';
import { jest } from '@jest/globals';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe('DigitalClock', () => {
  it('renders without crashing', async () => {
    const { render } = await import('ink-testing-library');
    const { lastFrame, unmount } = render(<DigitalClock />);
    expect(lastFrame()).toBeTruthy();
    unmount();
  });

  it('updates time correctly', async () => {
    jest.useRealTimers();
    const { render } = await import('ink-testing-library');

    const initialTime = new Date('2023-04-15T12:00:00');
    const { lastFrame, unmount } = render(
      <DigitalClock initialTime={initialTime} updateInterval={100} />
    );

    // Check initial time
    expect(lastFrame()).toMatch(/12:00:00/);

    // Wait for the component to update
    await delay(150);

    // Check if the displayed time has updated
    const updatedFrame = lastFrame();
    expect(updatedFrame).toMatch(/12:00:00/); // It's still 12:00:00 because we only waited 150ms

    // Wait for another update
    await delay(950);

    // Now it should be 12:00:01
    const finalFrame = lastFrame();
    expect(finalFrame).toMatch(/12:00:01/);

    unmount();
  });
});
