import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from '../..';
import { INFT } from '../../../models/INFT';

export interface FavoritesState {
  favorites: INFT[];
  status: string | null;
  error: string | null;
}

export interface ActionId {
  id: string;
}

export const initialFavoritesState: FavoritesState = {
  favorites: [],
  status: null,
  error: null,
};


const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: initialFavoritesState,
  reducers: {
    setItemToFavorite(state, action: PayloadAction<INFT>) {
      const findIdx = state.favorites.findIndex(
        (elem) => elem.token_id === action.payload.token_id
      );

      if (findIdx < 0) state.favorites.push(action.payload);
    },
    removeItemFromFavorite(state, action: PayloadAction<ActionId>) {
      const newTodos = state.favorites.filter(
        ({ token_id }) => token_id !== action.payload.id
      );
      state.favorites = newTodos;
    },
  },
});

export const selectFavorites = (state: RootState) => state.favorites.favorites;

export const { setItemToFavorite, removeItemFromFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
