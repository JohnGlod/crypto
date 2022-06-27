// @ts-ignore
import { changeTokensLongName } from '../../utils/person';

export interface IAvatar{
  avatarSrc?: string,
  avatarName : string
}

export const Avatar = ({ avatarSrc, avatarName }: IAvatar): JSX.Element => (
  <>
    <h4 className='text-xs mb'>Creator</h4>
    <div className='flex items-center max-w-[200px] gap-5'>
      <img
        className='rounded-full w-[50px] h-[50px] object-cover object-center border-2 border-dark '
        src={
          avatarSrc
        }
        alt='My avatar'
      />
      <h5 className='text-base'>{changeTokensLongName(avatarName)}</h5>
    </div>
  </>
);
