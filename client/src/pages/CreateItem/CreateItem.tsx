import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { IMetadata } from '../../models/INFT';

import { DragDropFile } from '../../components/DragDropFile';
import { createIPFS, savingMeta } from '../../utils';
import { UIButton, UIFilePrewie, UIPtag } from '../../components/UI-Kit';
import { ReactComponent as ArrowDown } from '../../assets/icons/arrowDown.svg';

export const CreateItem = () => {
  const [file, setFile] = useState(null);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = async (data: IMetadata) => {
    if (!file) {
      return;
    }

    const url = await createIPFS(data, file);
    const result = await savingMeta(data, url);

    reset();
    setFile(null);
    
  };

  return (
    <section className='w-full p-8 dark:text-white max-w-screen-md mx-auto sm:px-6 lg:px-8'>
      <form action='#' onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='flex flex-col gap-[55px] mb-[50px] '>
          <legend className='font-bold hidden md:block md:text-3xl md:font-semibold mb-10'>
            Create new Item
          </legend>
          <DragDropFile setFile={setFile} />
          {file && (
            <UIFilePrewie
              fileName={file?.name}
              fileSrc={file?.preview}
              fileType={file?.type}
            />
          )}
          <div className='w-full flex flex-col justify-between'>
            <label className='font-bold text-xl'>
              Name
              <input
                className={`w-full mt-5 p-5 outline-none border border-solid border-gray-light rounded-lg focus:border-dark hover:border-dark text-base border-gray-light
                dark:border-dark dark:text-white dark:bg-black-1 dark:focus:border-white`}
                type='text'
                placeholder='Item Name'
                {...register('name', {
                  required: 'The field is required',
                  minLength: {
                    value: 3,
                    message: 'Minimum 3 characters',
                  },
                })}
              />
            </label>
            {errors.name && (
              <UIPtag className='text-red p-1'>{errors.name.message}</UIPtag>
            )}
          </div>
          <div className='w-full flex flex-col justify-between '>
            <label className='font-bold text-xl'>
              Description
              <textarea
                {...register('description', {
                  required: 'The field is required',
                })}
                className={`mt-5 border border-solid rounded-lg px-5 focus:border-dark hover:border-dark w-full py-5 outline-none text-base border-gray-light 
                dark:border-dark dark:text-white dark:bg-black-1 dark:focus:border-white min-h-[190px]`}
                placeholder='Decription of your item'
              ></textarea>
            </label>
            {errors?.description && (
              <UIPtag className='text-red p-1'>
                {errors?.description?.message}
              </UIPtag>
            )}
          </div>
          <div className='w-full flex flex-col justify-between '>
            <label className='font-bold text-xl'>
              Price
              <div
                className={`mt-5 flex items-center border border-solid rounded-lg p-5 focus:border-dark hover:border-dark border-gray-light 
                dark:border-dark dark:text-white dark:bg-black-1  dark:hover:border-white dark:focus:border-white`}
              >
                <input
                  className='w-full outline-none dark:bg-black-1 text-base'
                  {...register('price', {
                    required: 'Choose the price you want',
                    min: {
                      value: 0.0001,
                      message: 'Min value 0.0001 ETH',
                    },
                    max: {
                      value: 0.1,
                      message: 'Max value 0.1 ETH',
                    },
                  })}
                  type='number'
                  placeholder='Enter Price'
                  step={0.0001}
                />
                <div className='flex items-center gap-1'>
                  ETH
                  <ArrowDown className='dark:stroke-white stroke-dark' />
                </div>
              </div>
            </label>
            {errors?.price && (
              <UIPtag className='text-red p-1'>{errors?.price?.message}</UIPtag>
            )}
          </div>
        </fieldset>
        <UIButton type='submit' appearance='primary' disabled={!isValid}>
          Create Item
        </UIButton>
      </form>
    </section>
  );
};
