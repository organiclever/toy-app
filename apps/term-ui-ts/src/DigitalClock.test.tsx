import React from 'react';
import DigitalClock from './DigitalClock';
import { jest } from '@jest/globals';

describe('DigitalClock', () => {
  it('renders without crashing', async () => {
    const { render } = await import('ink-testing-library');
    const { lastFrame, unmount } = render(<DigitalClock />);
    expect(lastFrame()).toBeTruthy();
    unmount();
  });

  afterEach(() => {
    jest.useRealTimers();
  });
});
