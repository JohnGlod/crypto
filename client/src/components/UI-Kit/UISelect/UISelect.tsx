import cn from 'classnames';

import { SelectProps, IOptions } from './UISelect.props';

export const UISelect = ({
  className,
  options,
  placeholder,
  width = 'normal',
  onChange,
  value,
  ...props
}: SelectProps) => (
  <select
    {...props}
    onChange={onChange}
    value={value}
    data-testid='select'
    className={cn(
      {
        'px-5 py-2 inline-block text-dark border rounded-lg border-solid border-gray-light focus:border-white dark:text-white dark:border-white dark:bg-dark dark:focus:border-red cursor-pointer':
          true,
        'w-[230px]': width === 'normal',
        'w-full': width === 'full',
      },
      className
    )}
  >
    {placeholder && (
      <option value={placeholder} hidden selected>
        {placeholder}
      </option>
    )}
    {options.map(({key, value, text }: IOptions) => (
      <option key={key} value={value}>
        {text}
      </option>
    ))}
  </select>
);
