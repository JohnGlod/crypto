import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    setItemToFavorite(state, action) {
      state.push(action.payload);
    },
    removeItemFromFavorite(state, action) {},
  },
});

export const { setItemToFavorite, removeItemFromFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
