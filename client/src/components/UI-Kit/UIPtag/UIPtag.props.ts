import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface PtagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParamElement>,
    HTMLParamElement
  > {
  className?: string;
  children: ReactNode;
}
