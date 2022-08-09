import React, {ChangeEventHandler} from 'react';

export interface IOptions {
  key: any;
  value: string;
  text: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: IOptions[];
  placeholder: string;
  width?: 'normal' | 'full';
  value: string | ReadonlyArray<string> | number;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}
