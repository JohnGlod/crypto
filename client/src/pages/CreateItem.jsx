import { Button } from '../components/Button';

export const CreateItem = () => {
  const maxSizeFiles = 1e8;
  return (
    <section className='w-full p-8'>
      <form action='#' className=''>
        <fieldset className='flex flex-col gap-[55px] mb-[50px]'>
          <legend className='font-bold hidden md:block'>Create new Item</legend>
          <div>
            <label className='font-bold flex flex-col text-xl mb-[20px] relative'>
              Upload File
              <input
                type='file'
                accept='.png, .jpg, .jpeg, .gif, .svg, .webm, .mp3, .mp4'
                size={maxSizeFiles}
                className={'absolute opacity-0 top-6 left-0 bg-red w-full h-[300px] cursor-pointer '}
              />
            </label>
            <div className='border-dashed border-2 border-gray-light flex flex-col font-bold items-center p-6 rounded-lg items-center text-sm '>
              <span className='w-2/4'>JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.</span>
              <img
                className='w-[137px] h-[137px]'
                src='/images/icons/image.svg'
                alt='Upload File'
              />
              <div className='flex flex-col items-center'>
                Drag and Drop File
                <br />
                <span className='font-normal'>on</span> browse media on your
                device
              </div>
            </div>
          </div>
          <div className='w-full flex flex-col justify-between'>
            <label className='font-bold mb-[20px] text-xl'>Name</label>
            <input
              className='w-full py-5 outline-none border border-solid border-gray-light rounded-lg px-5 focus:border-dark hover:border-dark'
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
              className='border border-solid border-gray-light rounded-lg px-5 focus:border-dark hover:border-dark w-full py-5 outline-none'
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
            <div className='flex items-center border border-solid border-gray-light rounded-lg px-5 focus:border-dark hover:border-dark'>
              <input
                id='price'
                name='price'
                className='w-full py-5 outline-none'
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
