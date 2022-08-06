import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../..';
import { INFT } from '../../../models/INFT';

export interface NFTCollectionsState {
  NFTCollections: INFT[];
  cursor: string | false;
  status: string | null;
  error: string | null;
}

export interface ActionResult {
  result: INFT[];
  cursor: string | false;
}

export const initialNFTcollectionsState: NFTCollectionsState = {
  NFTCollections: [],
  cursor: false,
  status: null,
  error: null,
};

const NFTCollections = createSlice({
  name: 'NFTCollections',
  initialState: initialNFTcollectionsState,
  reducers: {
    setNFTCollections(state, action: PayloadAction<ActionResult>) {
      return {
        ...state,
        NFTCollections: action.payload.result,
        cursor: action.payload.cursor,
      };
    },
  },
});

export const selectNFTCollections = (state: RootState) =>
  state.NFTCollections.NFTCollections;
export const selectCursor = (state: RootState) => state.NFTCollections.cursor;
export const selectError = (state: RootState) => state.NFTCollections.error;
export const selectStatus = (state: RootState) => state.NFTCollections.status;
export const { setNFTCollections } = NFTCollections.actions;

export default NFTCollections.reducer;
