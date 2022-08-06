import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  size?: 'normal' | 'full';
  rounded?: 'rounded' | 'none';
  type?: 'button' | 'reset' | 'submit';
  disabled?: false | true;
  appearance: 'primary' | 'secondary';
}
