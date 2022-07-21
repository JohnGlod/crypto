import cn from 'classnames';
import { PtagProps } from './UIPtag.props';

export const UIPtag = ({ className, children }: PtagProps) => {
  return (
    <p className={cn('max-h-96 overflow-auto overscroll-auto', className)}>
      {children}
    </p>
  );
};
