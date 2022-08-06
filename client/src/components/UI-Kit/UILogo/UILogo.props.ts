import React from 'react';

export interface LogoProps {
  theme: 'light' | 'dark',
  logoClick?: React.MouseEventHandler<HTMLDivElement>;
}
