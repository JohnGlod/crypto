import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IOptions {
  key: any;
  value: string;
  text: string;
}

export interface SelectProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options: IOptions[];
  className?: string;
  placeholder: string;
  size?: 'normal' | 'full';
  name: string;
  value: string;
}
