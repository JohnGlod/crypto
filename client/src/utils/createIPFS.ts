import { Moralis } from 'moralis';
import { IMetadata } from '../models/INFT';


export const createIPFS = async (data: IMetadata, file: File) => {
  const newFile = new Moralis.File(data.name, file);
  await newFile.saveIPFS();
  return newFile.ipfs()
};
