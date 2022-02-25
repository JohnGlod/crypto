import { useEffect } from 'react';
import { useNFTBalances } from 'react-moralis';

export const NFT = ({ user }) => {
  const { getNFTBalances, data } = useNFTBalances();

  useEffect(() => {
    getNFTBalances({
      params: {
        chain: 'ropsten',
        address: user.get('ethAddress'),
      },
    });
  }, []);
  return (
    <div>
      <h3 className='font-semibold text-xl dark:text-white '>Your NFT</h3>
    </div>
  );
};
