import cn from 'classnames';
import { CustomContainerProps } from './CustomContainer.props';

export const CustomContainer = ({
  className = '',
  children,
}: CustomContainerProps) => (
  <div
    className={cn(
      'w-full py-10 px-5 flex gap-5 max-w-screen-2xl mx-auto dark:text-white min-h-screen',
      className
    )}
  >
    {children}
  </div>
);
