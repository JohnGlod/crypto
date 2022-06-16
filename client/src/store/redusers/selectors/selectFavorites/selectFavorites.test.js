import { selectFavorites } from './selectFavorites';

describe('Selector favorites', () => {
  it('Returns an array of favorites', () => {
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
    const result = selectFavorites({ favorites });
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
    const result = selectFavorites({ favorites });
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
    const favorites = [1, 2, 4];
    const result = selectFavorites({ favorites });
    expect(result).toHaveLength(3);
  });

  it('Check for undefined', () => {
    const test = [
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
    const result = selectFavorites({ test });
    expect(result).toBeUndefined();
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
    ]
    const result = selectFavorites({ favorites });
    expect(result).not.toContainEqual({ metadata: 'test', token_address: '0x495f947276749ce646f68ac8c248420045cb7b5e',});
  });
});
