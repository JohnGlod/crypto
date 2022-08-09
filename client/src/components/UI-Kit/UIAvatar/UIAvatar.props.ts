import React from 'react';

export interface AvatarProps {
  avatarSrc: string;
  avatarAlt: string;
  avatarSize: 'small' | 'medium';
  avatarClick?: (event: React.MouseEvent<HTMLImageElement>) => void
}
