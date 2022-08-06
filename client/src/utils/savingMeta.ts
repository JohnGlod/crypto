import { Moralis } from 'moralis';
import { IMetadata } from '../models/INFT';

export const savingMeta = async (meta: IMetadata, imageUrl: string) => {
  const file = new Moralis.File(`${meta.name}metadata.json`, {
    base64: btoa(JSON.stringify({ ...meta, image: imageUrl })),
  });
  await file.saveIPFS();
  return file.ipfs();
};
