export interface IMetadata {
  name: string;
  description?: string | undefined | null;
  external_link?: string | undefined | null;
  image?: string | undefined | null;
  animation_url?: string | undefined | null;
}

export interface INFT {
  token_address: string;
  token_id: string;
  contract_type: string;
  token_uri: string;
  metadata: IMetadata;
  token_hash: unknown;
  minter_address?: string | undefined;
  block_number_minted?: string | undefined;
  transaction_minted?: string | undefined;
  last_token_uri_sync?: string | undefined;
  last_metadata_sync?: string | undefined;
  created_at?: string | undefined;

  synced_at?: string | undefined;
}
