import NFTCollectionsReducer, {
  setNFTCollections,
} from './NFTCollectionsSlice';

describe('NFTCollectionsSlice', () => {
  it('should return default state when passed an empty action', () => {
    const result = NFTCollectionsReducer(undefined, { type: '' });

    const initialState = {
      NFTCollections: [],
      cursor: false,
      status: null,
      error: null,
    };
    expect(result).toEqual(initialState);
    expect(result.NFTCollections).toEqual([]);
    expect(result.cursor).toBe(false);
    expect(result).toBeDefined();
  });

  it('should add new NFTCollections item with "setNFTCollections" action', () => {
    const action = {
      type: setNFTCollections.type,
      payload: {
        result: [
          {
            token_address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
            token_id:
              '25828147237821198195018353565513715926828886605696715423323237757450696261633',
          },
          {
            token_address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
            token_id:
              '25828147237821198195018353565513715926828886605696715423323237757450696261600',
          },
        ],
        cursor: 'cursor',
      },
    };
    const initialState = {
      NFTCollections: [],
      cursor: false,
      status: null,
      error: null,
    };

    const result = NFTCollectionsReducer(initialState, action);
    expect(result.NFTCollections).toHaveLength(2);
    expect(result.cursor).toBe('cursor');
    expect(result.NFTCollections).toEqual(action.payload.result);
    expect(result.NFTCollections).toBeDefined();
    expect(result).toBeDefined();
  });
});

/* import { createSlice } from '@reduxjs/toolkit';

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
    resetCursor(state) {
      return {
        ...state,
        cursor: null,
      };
    },
  },
});

export const {
  resetCursor,
  setNFTCollections,
} = NFTCollectionsSlice.actions;

export default NFTCollectionsSlice.reducer;
 */
