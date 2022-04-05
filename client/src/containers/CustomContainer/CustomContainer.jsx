import React from 'react';

export const CustomContainer = ({ children }) => {
  return (
    <div className='w-full p-5 flex flex-col gap-5 items-center max-w-screen-2xl mx-auto dark:text-white'>
      {children}
    </div>
  );
};
