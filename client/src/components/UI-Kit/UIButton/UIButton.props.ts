import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  buttonClick?: React.MouseEventHandler<HTMLButtonElement>;
  cName?: string;
  type?: 'button' | 'reset' | 'submit';
}
