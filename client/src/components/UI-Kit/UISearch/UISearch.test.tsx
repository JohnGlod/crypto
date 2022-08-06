import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { UISearch } from './UISearch';

const mockInitialRender = jest.fn();

const onSearchMock = (value: string) => mockInitialRender(value);

beforeEach(() => jest.clearAllMocks());
afterAll(() => jest.restoreAllMocks());

describe('UISearch component', () => {
  it('should component UISearch rendered', () => {
    render(<UISearch onSearch={() => {}} />);
    expect(
      screen.getByPlaceholderText(/Search Item Here/i)
    ).toBeInTheDocument();
  });

  it('should change value after user behavior', () => {
    render(<UISearch onSearch={() => {}} />);

    const input = screen.getByPlaceholderText(/Search Item Here/i);

    userEvent.clear(input);
    userEvent.type(input, 'some text');

    expect(input).toHaveValue('some text');
  });

  it('when you press Enter, the function is called', () => {
    render(<UISearch onSearch={onSearchMock} />);
    const input = screen.getByPlaceholderText(/Search Item Here/i);

    userEvent.clear(input);
    userEvent.type(input, '212');
    userEvent.keyboard('{enter}');
    expect(mockInitialRender).toBeCalledWith('212');
  });
});
