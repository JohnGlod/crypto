import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchItems = createAsyncThunk(
  'fetchNFTCollections',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://6214f77ccdb9d09717a81dff.mockapi.io/items');
      if (!response.ok) {
        throw new Error('Server Error!');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  }
);



const NFTCollectionsSlice = createSlice({
  name: 'NFTCollections',
  initialState: {
    NFTCollections: [],
    searchNFT: null,
    offset: 0,
    status: null,
    error: null,
  },
  reducers: {
    setSearchNFT(state, action){
      return {
        ...state,
        searchNFT : action.payload 
      }
    },
    resetOffset(state){
      return {
        ...state,
        offset : 0,
      }
    },
    changeOffset(state){
      return {
        ...state,
        offset : state.offset + 8 
      }
    },
    getNFTCollections(state, action) {
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.items = action.payload;
    },
    [fetchItems.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
})
export const { getNFTCollections, setSearchNFT, changeOffset, resetOffset} = NFTCollectionsSlice.actions;
export default NFTCollectionsSlice.reducer;
