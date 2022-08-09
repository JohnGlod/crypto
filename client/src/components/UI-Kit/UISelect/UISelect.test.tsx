import { ChangeEvent } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { UISelect } from './UISelect';

const mockInitialRender = jest.fn();

const onChangeMock = (event: ChangeEvent<HTMLSelectElement>) =>
  mockInitialRender(event.target.value);

beforeEach(() => jest.clearAllMocks());
afterAll(() => jest.restoreAllMocks());
const optionsStab = [
  {
    value: 'A',
    key: '1',
    text: 'A',
  },
  { value: 'B', key: '2', text: 'B' },
  { value: 'C', key: '3', text: 'C' },
];

describe('UISelect component', () => {
  it('should change value options', () => {
    render(
      <UISelect
        onChange={onChangeMock}
        value=''
        options={optionsStab}
        placeholder='UISelect is RENDER'
      />
    );
    const select = screen.getByTestId('select');
    userEvent.selectOptions(select, 'A');

    expect(mockInitialRender).toBeCalledWith('A');
  });

  it('should component UISearch rendered', () => {
    render(
      <UISelect
        onChange={onChangeMock}
        value=''
        options={optionsStab}
        placeholder='test'
      />
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});
