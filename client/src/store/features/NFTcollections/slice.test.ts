import { INFT } from '../../../models/INFT';
import { initialFavoritesState } from '../favorites/slice';
import NFTCollectionsReducer, {
  setNFTCollections,
  selectNFTCollections,
  selectCursor,
  NFTCollectionsState,
} from './slice';

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

    const initialState: NFTCollectionsState = {
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

describe('Selector NFTCollections', () => {
  const NFTCollections: INFT[] = [
    {
      block_number_minted: '13859012',
      contract_type: 'ERC1155',
      created_at: '2021-12-23T03:27:33.112Z',
      last_metadata_sync: '2022-06-27T20:23:07.840Z',
      last_token_uri_sync: '2022-06-27T20:23:06.392Z',
      metadata: {
        animation_url: null,
        description: '-------------------------------------------------',
        external_link: null,
        image:
          'https://lh3.googleusercontent.com/kmqAakVPGTjGSV5vPndC74Hws7f6HDgLAgZAuTWNtCcklxTE76nfc15duLC7VFx5nnuZYD06fknxWN234EepvxGcmqpbl5kJ3mJPoOg',
        name: 'Abstract Art #0708',
      },

      minter_address: '0x5ce0b58ddd27e6ca31dc1ffc0895469158683434',
      token_address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
      token_hash: 'daa09c1fc8e0266039851c05804c39e6',
      token_id:
        '66715350905427708617977118345690940547009007228083230062133527261494984572929',
      token_uri:
        'https://api.opensea.io/api/v1/metadata/0x495f947276749Ce646f68AC8c248420045cb7b5e/,0x937f8ceb3ca04a697a1635b9a768ee1a12192bd2000000000019250000000001',
      transaction_minted:
        '0x93973d0ae5ab7b0a1c23951d040ec7077b29948d1bb0261777ca8002bc06d32d',
    },
  ];

  it('Returns an array of objects', () => {
    const result = selectNFTCollections({
      NFTCollections: {
        NFTCollections,
        cursor: '',
        error: null,
        status: '',
      },
      favorites: initialFavoritesState,
    });
    expect(result).toEqual(NFTCollections);
  });

  it('Checking for the absence of undefined', () => {
    const result = selectNFTCollections({
      NFTCollections: {
        NFTCollections,
        cursor: '',
        error: null,
        status: '',
      },
      favorites: initialFavoritesState,
    });
    expect(result).toBeDefined();
  });

  it('returns the value of the cursor', () => {
    const cursor = 'test';
    const result = selectCursor({
      NFTCollections: {
        NFTCollections,
        cursor,
        error: null,
        status: '',
      },
      favorites: initialFavoritesState,
    });
    expect(result).toBe(cursor);
  });
});
