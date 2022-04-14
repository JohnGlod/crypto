import React from 'react';
import PropTypes from 'prop-types'

export const Avatar = ({ avatarPhoto, avatarName }) => {
  const changeTokensLongName = (name) => {
    const checkHex = name.slice(0, 2) === '0x'
    if (!checkHex) return name
    return [name.slice(0, 4), ' ... ' , name.slice( -4)].join('')
  }
  return (
    <>
      <h4 className='text-xs mb'>Creator</h4>
      <div className='flex items-center max-w-[200px] gap-5'>
        <img
          className='rounded-full w-[50px] h-[50px] object-cover object-center border-2 border-dark '
          src={avatarPhoto ? (avatarPhoto): ('https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg')}
          alt='my avatar'
        />
        <h5 className='text-base'>{changeTokensLongName(avatarName)}</h5>
      </div>
    </>
  );
};

Avatar.propTypes = {
  avatarName: PropTypes.string.isRequired,
  avatarPhoto: PropTypes.string,
}


