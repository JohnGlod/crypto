import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    setItemToFavorite(state, action){
      return [...state, action.payload]
    },
    removeItemFromFavorite(state, action) {
      return state.filter(({token_address, token_id}) => (token_address !== action.payload.address && token_id !== action.payload.id))
    },
  },
});

export const { setItemToFavorite, removeItemFromFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
