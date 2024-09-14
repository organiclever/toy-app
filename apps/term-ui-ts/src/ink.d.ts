declare module 'ink' {
  import { FC, ReactNode } from 'react';

  export const render: (tree: React.ReactElement) => void;

  interface BoxProps {
    flexDirection?: 'column' | 'row';
    children?: ReactNode;
  }
  export const Box: FC<BoxProps>;

  interface TextProps {
    children?: ReactNode;
  }
  export const Text: FC<TextProps>;
}
