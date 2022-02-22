import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchItems = createAsyncThunk(
  'items/fetchItems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('');
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

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    status: null,
    error: null,
  },
  reducers: {
    //func
    getItems(state, action) {},
    updateItems(state, action) {},
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
});

export const { getItems, updateItems, } = itemsSlice.actions;

export default itemsSlice.reducer;
