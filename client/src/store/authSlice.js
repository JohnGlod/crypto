import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ethers } from 'ethers';

export const connectWallet = createAsyncThunk(
  'connected/connectWallet',
  async (_, { rejectWithValue }) => {
    try {
      const eth = window.ethereum;
      if (!eth) {
        throw new Error('No crypto wallet found. Please install it!');
      }
      await eth.send('eth_requestAccounts');
      const provider = new ethers.providers.Web3Provider(eth);
      const signer = provider.getSigner();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const disconnectWallet = createAsyncThunk('', async () => {})

const authSlice = createSlice({
  name: 'connected',
  initialState: {
    connected: false,
    error: null, 
    status: null,
  },
  extraReducers: {
    [connectWallet.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [connectWallet.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.connected = action.payload;
    },
    [connectWallet.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
