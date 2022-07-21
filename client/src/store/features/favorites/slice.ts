import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { INFT } from '../../../models/INFT';

export interface FavoritesState {
  favorites: INFT[];
  status: string | null;
  error: string | null;
}

export const initialState: FavoritesState = {
  favorites: [],
  status: null,
  error: null,
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setItemToFavorite(state, action: PayloadAction<INFT>) {
      const findIdx = state.favorites.findIndex(
        (elem) => elem.token_id === action.payload.token_id
      );

      if (findIdx < 0) state.favorites.push(action.payload);
    },
    removeItemFromFavorite(state, action: PayloadAction<INFT>) {
      const newTodos = state.favorites.filter(
        ({ token_address }) => token_address !== action.payload.token_address
      );
      state.favorites = newTodos;
    },
  },
});

export const selectFavorites = (state: RootState) => state.favorites.favorites;

export const { setItemToFavorite, removeItemFromFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
