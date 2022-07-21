import cn from 'classnames';
import { CardItem } from '../../components/CardItem';
import { GridContainerProps } from './GridContainerProps';

export const GridContainer = ({
  list,
  loading = true,
  className = '',
  ...props
}: GridContainerProps) => {
  const renderCards = () => {
    return (!loading ? [...Array(8)] : list).map((nft, index) => {
      if (nft?.metadata) {
        const name = nft?.metadata?.name;
        const imageSrc = nft?.metadata?.image;

        return (
          <CardItem
            key={nft?.token_id}
            loading={loading}
            name={name}
            imageSrc={imageSrc}
            nftItem={nft}
            {...props}
          />
        );
      }
      return <CardItem key={index} loading={loading} />;
    });
  };

  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4',
        className
      )}
    >
      {renderCards()}
    </div>
  );
};
