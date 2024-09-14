declare module 'ink' {
  import { FC, ReactNode } from 'react';

  export const render: (tree: React.ReactElement) => void;

  interface BoxProps {
    flexDirection?: 'column' | 'row';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
    children?: ReactNode;
  }
  export const Box: FC<BoxProps>;

  interface TextProps {
    children?: ReactNode;
    color?: string;
    bold?: boolean;
  }
  export const Text: FC<TextProps>;
}
