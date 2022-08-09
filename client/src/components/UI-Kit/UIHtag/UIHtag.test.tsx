import { render, screen } from '@testing-library/react';

import { UIHtag } from './UIHtag';

describe('UIHtag component', () => {
  it('should render UIHtag', () => {
    render(
      <UIHtag tag='h3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illum
        necessitatibus optio possimus quo minus harum doloremque perspiciatis
        voluptatum, eaque quibusdam corrupti culpa ratione dignissimos perferendis
        ullam laborum totam iusto!
      </UIHtag>
    );
    expect(screen.getByText(/ullam laborum totam /i)).toContainHTML('h3')
  });
});

