import React, { useState } from 'react';
import { BsPencil } from 'react-icons/bs';

export const UserProfile = ({ user, testSrc }) => {
  const [changeName, setChangeName] = useState(false);
  return (
    <div className='flex flex-col items-center'>
      <div className='rounded-full border-4 border-dark w-56 h-56 '>
        <img
          className='w-full h-full rounded-full object-cover object-center'
          src={testSrc}
          alt='profile'
        />
      </div>
      {!changeName ? (
        <h2 className='font-semibold text-center text-xl flex gap-5 items-center'>
          <span className=''>{user.getUsername()}</span>
          <BsPencil
            className='cursor-pointer'
            onClick={(e) => {
              setChangeName(prev => !prev)
              console.log(e.target)}
            }
          />
        </h2>
      ) : (
        <form>
          <input type='text' placeholder=''/>
        </form>
      )}
    </div>
  );
};
