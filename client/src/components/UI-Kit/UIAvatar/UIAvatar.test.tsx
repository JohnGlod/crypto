
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TEST_BANNER_SRC } from '../../../utils/constants';

import { UIAvatar } from './UIAvatar';

const mockInitialRender = jest.fn();

const onClick = (event: React.MouseEvent<HTMLImageElement>) =>
  mockInitialRender(event);

beforeEach(() => jest.clearAllMocks());
afterAll(() => jest.restoreAllMocks());

describe('UIAvatar', () => {
  it('should render component', () => {
    render(
      <UIAvatar
        avatarAlt='text for image'
        avatarSize='medium'
        avatarSrc={TEST_BANNER_SRC}
      />
    );

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('if you click on the image, the function will be called', () => {
    render(
      <UIAvatar
        avatarAlt='text for image'
        avatarSize='medium'
        avatarSrc={TEST_BANNER_SRC}
        avatarClick={onClick}
      />
    );
    const image = screen.getByRole('img');
    userEvent.click(image);
    expect(mockInitialRender).toBeCalledTimes(1);
  });
});
