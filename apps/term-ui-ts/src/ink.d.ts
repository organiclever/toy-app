declare module 'ink' {
  import { FC, ReactNode } from 'react';

  export const render: (tree: ReactNode) => void;
  export const Box: FC<{ flexDirection?: string; alignItems?: string }>;
  export const Text: FC<{ bold?: boolean; color?: string }>;
}
