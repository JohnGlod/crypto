import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import NFTCollectionsReducer from './features/NFTcollections/slice';
import favoritesReducer from './features/favorites/slice';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  NFTCollections: NFTCollectionsReducer,
});

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default setupStore;
