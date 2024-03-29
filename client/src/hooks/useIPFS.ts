export const useIPFS = () =>  {
  const resolveLink = (url: string) => {
    if (!url || !url.includes('ipfs://')) return url;
    return url.replace('ipfs://', 'https://gateway.ipfs.io/');
  };

  return { resolveLink };
};
