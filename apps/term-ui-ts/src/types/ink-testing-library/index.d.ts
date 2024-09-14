declare module 'ink-testing-library' {
  import { ReactElement } from 'react';

  export function render(tree: ReactElement): {
    lastFrame: () => string;
    rerender: (tree: ReactElement) => void;
    unmount: () => void;
  };
}
