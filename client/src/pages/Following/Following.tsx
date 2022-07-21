import { useAppSelector } from '../../hooks/redux';
import { selectFavorites } from '../../store/features/favorites/slice';

import { UIInfo } from '../../components/UI-Kit';

import { CustomContainer, GridContainer} from '../../containers';

export const Following = () => {
  const favorites = useAppSelector(selectFavorites);

  return (
    <CustomContainer className='flex-col items-center'>
      <h3 className='font-semibold text-3xl dark:text-white '>My favorites</h3>
      {favorites.length ? (
        <GridContainer list={favorites} loading={true} />
      ) : (
        <UIInfo
          infoTitle='No favorites found.'
          infoText='It seems the list of favorites is empty.'
          className='mt-5'
        />
      )}
    </CustomContainer>
  );
};