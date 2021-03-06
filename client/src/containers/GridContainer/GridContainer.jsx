import { CardItem } from '../../components/CardItem';

export const GridContainer = ({ NFTBalance, fetchSuccess}) => {
  const renderCards = () => {
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
