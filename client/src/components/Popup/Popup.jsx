import React, { useState } from 'react';

export const Popup = ({title}) => {
  const [openModal, setOpenModal] = useState(true);
  const closeModal = () => setOpenModal((prev) => !prev);

  return (
    <div className='w-full min-h-screen h-full bg-black-2 opacity-30 dark:opacity-90 absolute inset-0 z-10 flex justify-center items-center '>
      {/* inner */}
      <div className='w-[600px] min-h-[480px] bg-white border-2 rounded-3xl opacity-100 '>
        {/* popup-container */}
        <div className=''>
          <h3>{title ? title : 'Check Out'}</h3>
        </div>
        <div className=''></div>
        <div className=''></div>
      </div>
    </div>
  );
};

