import cn from 'classnames';

import { SelectProps, IOptions } from './UISelect.props';

const SelectItem = ({ key, value, text }: IOptions) => {
  return (
    <option value={value}>
      {text}
    </option>
  );
};

export const UISelect = ({
  className,
  options,
  placeholder,
  name,
  value,
  onChange,
  size = 'normal',
  ...props
}: SelectProps) => (
  <select
    name={name}
    value={value}
    onChange={onChange}
    {...props}
    className={cn(
      {
        'px-5 py-2 inline-block text-dark border rounded-lg border-solid border-gray-light focus:border-white dark:text-white dark:border-white dark:bg-dark dark:focus:border-red cursor-pointer':
          true,
        'w-[230px]': size === 'normal',
        'w-full': size === 'full',
      },
      className
    )}
  >
    {placeholder && (
      <option value={placeholder} hidden={true} selected>
        {placeholder}
      </option>
    )}
    {options.map((item) => (
      <SelectItem key={item.key} value={item.value} text={item.text} />
    ))}
  </select>
);
