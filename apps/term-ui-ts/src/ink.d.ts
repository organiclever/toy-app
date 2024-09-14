import { FC, PropsWithChildren } from 'react';

declare module 'ink' {
  export interface TextProps {
    bold?: boolean;
    color?: string;
  }

  export interface BoxProps {
    flexDirection?: string;
    alignItems?: string;
  }

  export const Text: FC<PropsWithChildren<TextProps>>;
  export const Box: FC<PropsWithChildren<BoxProps>>;
}
