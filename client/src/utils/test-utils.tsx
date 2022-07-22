import { ReactElement, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import { PreloadedState } from '@reduxjs/toolkit';

import type { AppStore, RootState } from '../store';
import setupStore from '../store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
