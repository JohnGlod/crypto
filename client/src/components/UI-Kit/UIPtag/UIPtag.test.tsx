import { render, screen } from '@testing-library/react';

import { UIPtag } from './UIPtag';

describe('UIPtag component', () => {
  it('should render UIPtag', () => {
    render(
      <UIPtag>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illum
        necessitatibus optio possimus quo minus harum doloremque perspiciatis
        voluptatum, eaque quibusdam corrupti culpa ratione dignissimos perferendis
        ullam laborum totam iusto!
      </UIPtag>
    );
    expect(screen.getByText(/ullam laborum totam /i)).toContainHTML('p')
  });
});

