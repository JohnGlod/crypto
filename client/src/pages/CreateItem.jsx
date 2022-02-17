import { Button } from '../components/Button';
import { DragDropFile } from '../components/DragDropFile';
export const CreateItem = () => {
  return (
    <section className='w-full p-8 dark:text-white max-w-screen-md mx-auto sm:px-6 lg:px-8'>
      <form action='#' className=''>
        <fieldset className='flex flex-col gap-[55px] mb-[50px] '>
          <legend className='font-bold hidden md:block md:text-3xl md:font-semibold mb-10'>Create new Item</legend>
          <DragDropFile />
          <div className='w-full flex flex-col justify-between'>
            <label className='font-bold mb-[20px] text-xl'>Name</label>
            <input
              className={`w-full py-5 outline-none border border-solid border-gray-light rounded-lg px-5 focus:border-dark hover:border-dark 
              dark:text-white dark:bg-black-1 dark:focus:border-white dark:border-black-1 `}
              type='text'
              placeholder='Item Name'
            />
          </div>
          <div className='w-full flex flex-col justify-between '>
            <label for='description' className='font-bold mb-[20px] text-xl'>
              Description
            </label>
            <textarea
              id='description'
              name='descr'
              className={`border border-solid border-gray-light rounded-lg px-5 focus:border-dark hover:border-dark w-full py-5 outline-none 
              dark:text-white dark:bg-black-1 dark:focus:border-white dark:border-black-1 `}
              type='text'
              cols={33}
              rows={5}
              placeholder='Decription of your item'
            ></textarea>
          </div>
          <div className='w-full flex flex-col justify-between '>
            <label for='price' className='font-bold mb-[20px] text-xl'>
              Price
            </label>
            <div
              className={`flex items-center border border-solid border-gray-light rounded-lg p-5 focus:border-dark hover:border-dark 
              dark:text-white dark:bg-black-1 dark:border-dark dark:hover:border-white dark:focus:border-white`}
            >
              <input
                id='price'
                name='price'
                className='w-full outline-none dark:bg-black-1 '
                type='number'
                placeholder='Enter Price'
                step={0.001}
                max={1}
                min={0.001}
              />
              <div className='flex'>ETH </div>
            </div>
          </div>
        </fieldset>
        <Button
          type={'submit'}
          cName={'color-accent text-white'}
          title={'Create Item'}
        />
      </form>
    </section>
  );
};
