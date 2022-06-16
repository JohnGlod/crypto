import React from 'react';
import PropTypes from 'prop-types';

import { changeTokensLongName } from '../../utils/person';

export const Avatar = ({ avatarPhoto, avatarName }) => (
  <>
    <h4 className='text-xs mb'>Creator</h4>
    <div className='flex items-center max-w-[200px] gap-5'>
      <img
        className='rounded-full w-[50px] h-[50px] object-cover object-center border-2 border-dark '
        src={
          avatarPhoto
        }
        alt='My avatar'
      />
      <h5 className='text-base'>{changeTokensLongName(avatarName)}</h5>
    </div>
  </>
);

Avatar.propTypes = {
  avatarName: PropTypes.string.isRequired,
  avatarPhoto: PropTypes.string,
};
