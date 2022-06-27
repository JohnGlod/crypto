import React from 'react'

import { CardItem } from '../../components/CardItem';

interface INFTBalance {

}

interface IGrid{
  NFTBalance: INFTBalance,
  fetchSuccess: boolean,
}


/* 

{
    "token_id": "25828147237821198195018353565513715926828886605696715423323237757450696261633",
    "token_address": "0x495f947276749ce646f68ac8c248420045cb7b5e",
    "token_uri": "https://api.opensea.io/api/v1/metadata/0x495f947276749Ce646f68AC8c248420045cb7b5e/0x391a3699f430a4563097aec735b3c242108350ca000000000000750000000001",
    "metadata": {
      "name": "Sleepless Streets #064 Ginseng",
      "description": "Title: Ginseng\n\nArtist: Tylersjourney\n\nEdition: 1/1\n\nStory: Chinatown in Toronto is filled with history and just full of life any time of night. So many neon lights to see on my nightly walks through these sleepless streets. I suffered from insomnia because of a brain tumor for many years so instead of sleeping I would just go out with my camera until the early hours of the morning. Being out in the world would mask my symptoms and fill that space with adrenaline while I'm out searching for my next image and story to tell. This is captured along Toronto's Dundas Street late one of those nights, truly a special place to capture the lights reflecting off of the wet pavement.\n\nCollector will unlock an image file.",
      "external_link": null,
      "image": "https://lh3.googleusercontent.com/iNfSsO0fY1kNpjnKYO1CM5_L5ISazoAmKM5qxMZC51R4DnKRSwdenOS8WoyVK-g5lHSVDt3gAp_n0VF2QdUyuzUesWh82bl2zx1ZDg",
      "animation_url": null
    },
    "is_valid": 1,
    "syncing": 2,
    "frozen": 0,
    "resyncing": 1,
    "transfer_index": [13371817, 374, 471, 0],
    "synced_at": "2022-04-30T10:33:20.852Z",
    "last_metadata_sync": null,
    "last_token_uri_sync": null,
    "contract_type": "ERC1155",
    "token_hash": "ff97c53d221ae972ee9bab702f3cc0e5",
    "batch_id": "6c798e3a-6e36-42bd-a340-9609b14dc5e4",
    "metadata_name": "Sleepless Streets #064 Ginseng",
    "metadata_description": "Title: Ginseng\n\nArtist: Tylersjourney\n\nEdition: 1/1\n\nStory: Chinatown in Toronto is filled with history and just full of life any time of night. So many neon lights to see on my nightly walks through these sleepless streets. I suffered from insomnia because of a brain tumor for many years so instead of sleeping I would just go out with my camera until the early hours of the morning. Being out in the world would mask my symptoms and fill that space with adrenaline while I'm out searching for my next image and story to tell. This is captured along Toronto's Dundas Street late one of those nights, truly a special place to capture the lights reflecting off of the wet pavement.\n\nCollector will unlock an image file.",
    "metadata_attributes": null,
    "block_number_minted": "13371817",
    "opensea_lookup": null,
    "minter_address": "0x4a5dc87a3bfcba0e4c80de492c3f3af1cf06990c",
    "transaction_minted": "0x1f2f44669c2cf4f05cae341f2056de40aa98f9990ce1acda4a5479e1de555430",
    "frozen_log_index": null,
    "imported": null,
    "createdAt": "2021-10-07T12:28:50.896Z",
    "updatedAt": "2022-06-27T13:47:54.054Z"
  },
*/

export const GridContainer = ({ NFTBalance, fetchSuccess} : IGrid) => {
  const renderCards = () => {
    
    console.log(JSON.stringify(NFTBalance[0]));
    return (!fetchSuccess ? [...Array(8)] : NFTBalance).map((nft, index) => (
      <CardItem
        key={nft?.token_id ?? index}
        metadata={nft?.metadata}
        token_address={nft?.token_address}
        token_id={nft?.token_id}
        loading={fetchSuccess} 
        {...nft}/>
    ))
  }
  return (
    <div className='grid grid-cols-2 gap-5 md:grid-cols-4'>
      {renderCards()}
    </div>
  );
};
