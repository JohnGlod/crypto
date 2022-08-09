import { render, screen, fireEvent } from '@testing-library/react';

import { UIButton } from './UIButton';

it('calls onClick prop when clicked', () => {
  const handleClick = jest.fn();
  render(<UIButton appearance='primary' onClick={handleClick}>Click Me</UIButton>);
  fireEvent.click(screen.getByText(/click me/i));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
