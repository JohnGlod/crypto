import { RootState } from '../..';
import { INFTs } from '../../../models/INFTs';
import favoriteReducer, {
  setItemToFavorite,
  removeItemFromFavorite,
  selectFavorites,
  FavoritesState,
} from './slice';

describe('favoriteSlice', () => {
  it('should return default state when passed an empty action', () => {
    const result = favoriteReducer(undefined, { type: '' });
    expect(result).toEqual({
      favorites: [],
      status: null,
      error: null,
    });
  });

  it('should add new favotite item with "setItemToFavorite" action', () => {
    const action = {
      type: setItemToFavorite.type,
      payload: {
        token_id:
          '25828147237821198195018353565513715926828886605696715423323237731062417195009',
        token_address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
        token_uri:
          'https://api.opensea.io/api/v1/metadata/0x495f947276749Ce646f68AC8c248420045cb7b5e/0x391a3699f430a4563097aec735b3c242108350ca0000000000005d0000000001',
        contract_type: 'ERC1155',
        token_hash: 'fee2edec7dbb6a95141c0afea36b5f60',
        minter_address: '0xff2a6525762c549221614e969d48f509e631aa92',
        block_number_minted: '13297346',
        transaction_minted:
          '0xc52077b7e27e03731076524dbe063bf8191f320b26ea9a28574497c88b14e259',
        last_token_uri_sync: '2022-07-07T15:51:25.433Z',
        last_metadata_sync: '2022-07-07T15:51:43.598Z',
        created_at: '2021-09-25T21:17:55.308Z',
      },
    };
    const result = favoriteReducer(
      {
        favorites: [],
        status: null,
        error: null,
      },
      action
    );

    expect(result.favorites[0].contract_type).toBe('ERC1155');
    expect(result.favorites).toHaveLength(1);
    expect(result.favorites[0]).toEqual(action.payload);
    expect(result.favorites[0]).toBeDefined();
  });

  it('should remove favorite item with "removeItemFromFavorite" action', () => {
    const favorites = [
      {
        block_number_minted: '13371817',
        contract_type: 'ERC1155',
        created_at: '2021-10-07T12:28:50.896Z',
        last_metadata_sync: '2022-07-07T15:28:29.323Z',
        last_token_uri_sync: '2022-07-07T15:28:21.372Z',
        metadata: {
          animation_url: null,
          description:
            "Title: Ginseng\n\nArtist: Tylersjourney\n\nEdition: 1/1\n\nStory: Chinatown in Toronto is filled with history and just full of life any time of night. So many neon lights to see on my nightly walks through these sleepless streets. I suffered from insomnia because of a brain tumor for many years so instead of sleeping I would just go out with my camera until the early hours of the morning. Being out in the world would mask my symptoms and fill that space with adrenaline while I'm out searching for my next image and story to tell. This is captured along Toronto's Dundas Street late one of those nights, truly a special place to capture the lights reflecting off of the wet pavement.\n\nCollector will unlock an image file.",
          external_link: null,
          image:
            'https://lh3.googleusercontent.com/iNfSsO0fY1kNpjnKYO1CM5_L5ISazoAmKM5qxMZC51R4DnKRSwdenOS8WoyVK-g5lHSVDt3gAp_n0VF2QdUyuzUesWh82bl2zx1ZDg',
          name: 'Sleepless Streets #064 Ginseng',
        },

        minter_address: '0x4a5dc87a3bfcba0e4c80de492c3f3af1cf06990c',
        token_address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
        token_hash: 'ff97c53d221ae972ee9bab702f3cc0e5',
        token_id:
          '25828147237821198195018353565513715926828886605696715423323237757450696261633',
        token_uri:
          'https://api.opensea.io/api/v1/metadata/0x495f947276749Ce646f68AC8c248420045cb7b5e/,0x391a3699f430a4563097aec735b3c242108350ca000000000000750000000001',
        transaction_minted:
          '0x1f2f44669c2cf4f05cae341f2056de40aa98f9990ce1acda4a5479e1de555430',
      },
    ];

    const action = {
      type: removeItemFromFavorite.type,
      payload: {
        id: '25828147237821198195018353565513715926828886605696715423323237757450696261633',
      },
    };

    const result = favoriteReducer(
      {
        favorites,
        status: null,
        error: null,
      },
      action
    );
    expect(result.favorites).toEqual([]);
    expect(result.favorites).toHaveLength(0);
    expect(result.favorites[0]).toBeUndefined();
  });
});

describe('Selector favorites', () => {
  it('Returns an array of favorites', () => {
    const favorites = [
      {
        block_number_minted: '13227292',
        contract_type: 'ERC1155',
        created_at: '2021-09-15T01:12:08.613Z',
        last_metadata_sync: '2022-07-07T15:24:38.516Z',
        last_token_uri_sync: '2022-07-07T15:24:22.606Z',
        metadata: {
          animation_url: null,
          description:
            "Title: Perfect Dark\n\nArtist: Tylersjourney\n\nEdition: 1/1\n\nStory: One of those rare moments in between that ties all the street scenes together. The rain had just stopped making for a perfect reflection of the Toronto's famous CN Tower. The front of my camera lens was fully in the water to capture this reflection as large as possible. A man wearing a full construction outfit came up to talk to me and said he was a photographer as well so we got into deep conversation about what I was photographing. The connections you make while out creating are always the most special.\n\nCollector will unlock an image file.",
          external_link: null,
          image:
            'https://lh3.googleusercontent.com/BctQaeAr9Pr-kTXW8OV1btv1dphFCNlN8s7WZ9aSD1B0S83zvDeiBJ3UHCVLw1cERXXOGkupF7BGZdFImXlkanvzrrJ1ESTraOwrUA',
          name: 'Sleepless Streets #023 Perfect Dark',
        },
        minter_address: '0xf85a9f2d6a528ff9d5a583d8ee12b0aeebba971f',
        token_address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
        token_hash: 'fd097ca69bcbad359c0cf21ad630495f',
        token_id:
          '25828147237821198195018353565513715926828886605696715423323237712370719522817',
        token_uri:
          'https://api.opensea.io/api/v1/metadata/0x495f947276749Ce646f68AC8c248420045cb7b5e/0x391a3699f430a4563097aec735b3c242108350ca0000000000004c0000000001',
        transaction_minted:
          '0x8ebea6d6fc0f8df109d054d21acdb222c1c80a4c66df8e1a3106fec59819ee55',
      },
    ];
    const result = selectFavorites({
      favorites: { favorites, status: null, error: null },
    });
    expect(result).toEqual(favorites);
  });

  it('Checks the structure of the object you are looking for', () => {
    const favorites = [
      {
        metadata: {
          name: 'Sleepless Streets #064 Ginseng',
          description:
            "Title: Ginseng\n\nArtist: Tylersjourney\n\nEdition: 1/1\n\nStory: Chinatown in Toronto is filled with history and just full of life any time of night. So many neon lights to see on my nightly walks through these sleepless streets. I suffered from insomnia because of a brain tumor for many years so instead of sleeping I would just go out with my camera until the early hours of the morning. Being out in the world would mask my symptoms and fill that space with adrenaline while I'm out searching for my next image and story to tell. This is captured along Toronto's Dundas Street late one of those nights, truly a special place to capture the lights reflecting off of the wet pavement.\n\nCollector will unlock an image file.",
          external_link: null,
          image:
            'https://lh3.googleusercontent.com/iNfSsO0fY1kNpjnKYO1CM5_L5ISazoAmKM5qxMZC51R4DnKRSwdenOS8WoyVK-g5lHSVDt3gAp_n0VF2QdUyuzUesWh82bl2zx1ZDg',
          animation_url: null,
        },
        token_address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
        token_id:
          '25828147237821198195018353565513715926828886605696715423323237757450696261633',
      },
      {
        metadata: {
          name: 'Sleepless Streets #040 Deep Space Nine',
          description:
            "Title: Deep Space Nine\n\nArtist: Tylersjourney\n\nEdition: 1/1\n\nStory: To think Toronto's City Hall resembling a spaceship was built so long ago in 1965. It's futuristic look is the perfect building to tie together all the street stories for \"Sleepless Streets\". Standing on a rooftop far above the city streets with nothing but you and the feeling of wind blowing past you is the greatest feeling and so hard to explain. Welcome to Toronto the city that's always pushing into the future.\n\nCollector will unlock an image file.",
          external_link: null,
          image:
            'https://lh3.googleusercontent.com/7bZAkhcTvDFRLeWg30AnfauVKdQJ6cSuXsuVXToyA1tJQGBsPPq8fD6mKSD0l_CsbiTns_NwIGaqV3WNcT-rpC0hq1si6i1j1DPjjw',
          animation_url: null,
        },
        token_address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
        token_id:
          '25828147237821198195018353565513715926828886605696715423323237731062417195009',
      },
      {
        metadata: {
          name: 'Sleepless Streets #023 Perfect Dark',
          description:
            "Title: Perfect Dark\n\nArtist: Tylersjourney\n\nEdition: 1/1\n\nStory: One of those rare moments in between that ties all the street scenes together. The rain had just stopped making for a perfect reflection of the Toronto's famous CN Tower. The front of my camera lens was fully in the water to capture this reflection as large as possible. A man wearing a full construction outfit came up to talk to me and said he was a photographer as well so we got into deep conversation about what I was photographing. The connections you make while out creating are always the most special.\n\nCollector will unlock an image file.",
          external_link: null,
          image:
            'https://lh3.googleusercontent.com/BctQaeAr9Pr-kTXW8OV1btv1dphFCNlN8s7WZ9aSD1B0S83zvDeiBJ3UHCVLw1cERXXOGkupF7BGZdFImXlkanvzrrJ1ESTraOwrUA',
          animation_url: null,
        },
        token_address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
        token_id:
          '25828147237821198195018353565513715926828886605696715423323237712370719522817',
      },
    ];
    const result = selectFavorites({
      favorites: {
        favorites,
        status: null,
        error: null,
      },
    });
    expect(result).toContainEqual({
      metadata: {
        name: 'Sleepless Streets #064 Ginseng',
        description:
          "Title: Ginseng\n\nArtist: Tylersjourney\n\nEdition: 1/1\n\nStory: Chinatown in Toronto is filled with history and just full of life any time of night. So many neon lights to see on my nightly walks through these sleepless streets. I suffered from insomnia because of a brain tumor for many years so instead of sleeping I would just go out with my camera until the early hours of the morning. Being out in the world would mask my symptoms and fill that space with adrenaline while I'm out searching for my next image and story to tell. This is captured along Toronto's Dundas Street late one of those nights, truly a special place to capture the lights reflecting off of the wet pavement.\n\nCollector will unlock an image file.",
        external_link: null,
        image:
          'https://lh3.googleusercontent.com/iNfSsO0fY1kNpjnKYO1CM5_L5ISazoAmKM5qxMZC51R4DnKRSwdenOS8WoyVK-g5lHSVDt3gAp_n0VF2QdUyuzUesWh82bl2zx1ZDg',
        animation_url: null,
      },
      token_address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
      token_id:
        '25828147237821198195018353565513715926828886605696715423323237757450696261633',
    });
  });

  it('Checking for the length of an object', () => {
    const favorites = [
      {
        metadata: {
          name: 'Sleepless Streets #064 Ginseng',
          description:
            "Title: Ginseng\n\nArtist: Tylersjourney\n\nEdition: 1/1\n\nStory: Chinatown in Toronto is filled with history and just full of life any time of night. So many neon lights to see on my nightly walks through these sleepless streets. I suffered from insomnia because of a brain tumor for many years so instead of sleeping I would just go out with my camera until the early hours of the morning. Being out in the world would mask my symptoms and fill that space with adrenaline while I'm out searching for my next image and story to tell. This is captured along Toronto's Dundas Street late one of those nights, truly a special place to capture the lights reflecting off of the wet pavement.\n\nCollector will unlock an image file.",
          external_link: null,
          image:
            'https://lh3.googleusercontent.com/iNfSsO0fY1kNpjnKYO1CM5_L5ISazoAmKM5qxMZC51R4DnKRSwdenOS8WoyVK-g5lHSVDt3gAp_n0VF2QdUyuzUesWh82bl2zx1ZDg',
          animation_url: null,
        },
        token_address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
        token_id:
          '25828147237821198195018353565513715926828886605696715423323237757450696261633',
      },
      {
        metadata: {
          name: 'Sleepless Streets #040 Deep Space Nine',
          description:
            "Title: Deep Space Nine\n\nArtist: Tylersjourney\n\nEdition: 1/1\n\nStory: To think Toronto's City Hall resembling a spaceship was built so long ago in 1965. It's futuristic look is the perfect building to tie together all the street stories for \"Sleepless Streets\". Standing on a rooftop far above the city streets with nothing but you and the feeling of wind blowing past you is the greatest feeling and so hard to explain. Welcome to Toronto the city that's always pushing into the future.\n\nCollector will unlock an image file.",
          external_link: null,
          image:
            'https://lh3.googleusercontent.com/7bZAkhcTvDFRLeWg30AnfauVKdQJ6cSuXsuVXToyA1tJQGBsPPq8fD6mKSD0l_CsbiTns_NwIGaqV3WNcT-rpC0hq1si6i1j1DPjjw',
          animation_url: null,
        },
        token_address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
        token_id:
          '25828147237821198195018353565513715926828886605696715423323237731062417195009',
      },
      {
        metadata: {
          name: 'Sleepless Streets #023 Perfect Dark',
          description:
            "Title: Perfect Dark\n\nArtist: Tylersjourney\n\nEdition: 1/1\n\nStory: One of those rare moments in between that ties all the street scenes together. The rain had just stopped making for a perfect reflection of the Toronto's famous CN Tower. The front of my camera lens was fully in the water to capture this reflection as large as possible. A man wearing a full construction outfit came up to talk to me and said he was a photographer as well so we got into deep conversation about what I was photographing. The connections you make while out creating are always the most special.\n\nCollector will unlock an image file.",
          external_link: null,
          image:
            'https://lh3.googleusercontent.com/BctQaeAr9Pr-kTXW8OV1btv1dphFCNlN8s7WZ9aSD1B0S83zvDeiBJ3UHCVLw1cERXXOGkupF7BGZdFImXlkanvzrrJ1ESTraOwrUA',
          animation_url: null,
        },
        token_address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
        token_id:
          '25828147237821198195018353565513715926828886605696715423323237712370719522817',
      },
    ];
    const result = selectFavorites({
      favorites: {
        favorites,
        status: null,
        error: null,
      },
    });
    expect(result).toHaveLength(3);
  });

  it('False element check', () => {
    const favorites = [
      {
        metadata: {
          name: 'Sleepless Streets #064 Ginseng',
          description:
            "Title: Ginseng\n\nArtist: Tylersjourney\n\nEdition: 1/1\n\nStory: Chinatown in Toronto is filled with history and just full of life any time of night. So many neon lights to see on my nightly walks through these sleepless streets. I suffered from insomnia because of a brain tumor for many years so instead of sleeping I would just go out with my camera until the early hours of the morning. Being out in the world would mask my symptoms and fill that space with adrenaline while I'm out searching for my next image and story to tell. This is captured along Toronto's Dundas Street late one of those nights, truly a special place to capture the lights reflecting off of the wet pavement.\n\nCollector will unlock an image file.",
          external_link: null,
          image:
            'https://lh3.googleusercontent.com/iNfSsO0fY1kNpjnKYO1CM5_L5ISazoAmKM5qxMZC51R4DnKRSwdenOS8WoyVK-g5lHSVDt3gAp_n0VF2QdUyuzUesWh82bl2zx1ZDg',
          animation_url: null,
        },
        token_address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
        token_id:
          '25828147237821198195018353565513715926828886605696715423323237757450696261633',
      },
    ];
    const result = selectFavorites({
      favorites: {
        favorites,
        status: null,
        error: null,
      },
    });
    expect(result).not.toContainEqual({
      metadata: 'test',
      token_address: '0x495f947276749ce646f68ac8c248420045cb7b5e',
    });
  });
});