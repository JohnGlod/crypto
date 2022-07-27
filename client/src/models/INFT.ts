export interface IMetadata {
  name: string;
  description?: string | undefined | null;
  external_link?: string | undefined | null;
  image?: string | undefined | null;
  animation_url?: string | undefined | null;
}

export interface INFT {
  block_number_minted?: string | undefined;
  contract_type: string;
  created_at?: string | undefined;
  metadata: IMetadata;
  token_address: string;
  token_id: string;
  last_token_uri_sync?: string | undefined | null;
  last_metadata_sync?: string | undefined | null;
  token_uri: string;
  token_hash: unknown;
  minter_address?: string | undefined;
  transaction_minted?: string | undefined;


/*   
  is_valid?: number | undefined | null;
  synced_at?: string | undefined;
  syncing?: number | undefined | null;
  frozen?: number | undefined | null;
  resyncing?: number | undefined | null;
  transfer_index?: number[] | [];
  batch_id?: string | undefined | null;
  metadata_name?: string | undefined | null;
  metadata_description?: string | undefined | null;
  metadata_attributes?: string | undefined | null;
  opensea_lookup?: string | undefined | null;
  frozen_log_index?: string | undefined | null;
  imported?: string | undefined | null;
  createdAt?: string | undefined;
  updatedAt?: string | undefined; */
}
