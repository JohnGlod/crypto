import { PictureItem } from '../PictureItem';

export const Tables = ({name, image }) => {
  return (
    <table className='w-full'>
      <thead>
        <tr className=' flex items-center justify-between font-semibold'>
          <th scope='col'>Item</th>
          <th scope='col'>Subtotal</th>
        </tr>
      </thead>
      <tbody className='p-2 flex flex-col gap-5'>
        <tr className='flex items-center justify-between'>
          <td className='flex items-center justify-between gap-5'>
            <PictureItem
              pictureImage={
                image
              }
              pictureName={name}
              className='w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]'
            />
            <div>
              <h5 className='font-semibold'>Mia Ayana</h5>
              <h6>{name}</h6>
            </div>
          </td>
          <td>4.5 ETH</td>
        </tr>
        <tr className='flex items-center justify-between'>
          <td className='font-semibold'>Total</td>
          <td className=''>4.5 ETH</td>
        </tr>
      </tbody>
    </table>
  );
};
