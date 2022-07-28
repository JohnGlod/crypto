import { Moralis } from 'moralis';
import { IMetadata } from '../models/INFT';

export const savingMeta = async (meta: INFTMeta, imageUrl: string) => {
  const file = new Moralis.File('file.json', {
    base64: btoa(JSON.stringify({ ...meta, "image": imageUrl })),
  });

  return await file.saveIPFS();
};
