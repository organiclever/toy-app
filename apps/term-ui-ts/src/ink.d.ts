declare module 'ink' {
  import { FC, ReactNode } from 'react';

  export const Box: FC<{
    children: ReactNode;
    flexDirection?: 'row' | 'column';
  }>;
  export const Text: FC<{ children: ReactNode }>;
  export function useInput(callback: (input: string, key: any) => void): void;
  export function render(tree: ReactNode): void;
}
