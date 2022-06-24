import { createSlice } from '@reduxjs/toolkit';

const NFTCollectionsSlice = createSlice({
  name: 'NFTCollections',
  initialState: {
    NFTCollections: [],
    cursor: false,
    status: null,
    error: null,
  },

  reducers: {
    setNFTCollections(state, action) {
      return {
        ...state,
        NFTCollections: action.payload.result,
        cursor: action.payload.cursor,
      };
    },
  },
});

export const {
  setNFTCollections,
} = NFTCollectionsSlice.actions;

export default NFTCollectionsSlice.reducer;
