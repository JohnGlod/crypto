import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ethers } from 'ethers';

const connectWallet = createAsyncThunk('connected/', async () => {
  try {
    const eth = window.ethereum;
    if (!eth) {
      throw new Error('No crypto wallet found. Please install it!');
    }
    await window.ethereum.send('eth_requestAccounts');
    const provider = new ethers.providers.Web3Provider(eth);
    const signer = provider.getSigner();
  } catch (error) {}
});
const authSlice = createSlice({
  name: 'connected',
  initialState: false,
  reducers: {
    connectAccount(state, action) {
      try {
      } catch (error) {}
    },
    unConnectAccount(state, action) {},
  },
});
