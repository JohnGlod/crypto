import { IAvatar } from '../Avatar/Avatar';

export interface IUser {
  username: string;
  authData: {
    moralisEth: {
      id: string;
      signature: string;
      data: string;
    };
  };
  createdAt: string; //?
  updatedAt: string; //?
  accounts: string[];
  ethAddress: string;
  ACL: {
    [key: string]: {
      read: boolean;
      write: boolean;
    };
  };
  sessionToken: string;
  objectId: string;
}

export interface IParseUser {
  id: string;
  _localId: undefined | string;
  _objCount: number;
  className: string;
}

export interface IProfile extends IAvatar {
  banner: string;
  user: IParseUser;
}

export const UserProfile = ({
  user,
  avatarSrc,
  banner,
}: IProfile): JSX.Element => {
  console.log(user);
  return (
    <div className='py-5 relative flex flex-col items-center'>
      <img
        className='w-full lg:h-[300px] object-cover object-center h-[200px] '
        src={banner}
        alt='banner'
      />
      <div className={`absolute top-2/4 left-2/4 -translate-x-2/4 `}>
        <div className='rounded-full border-4 border-dark w-32 h-32 lg:w-56 lg:h-56'>
          <img
            className={`w-full h-full rounded-full object-cover object-center`}
            src={avatarSrc}
            alt='profile'
          />
        </div>
      </div>
      <h2 className='relative top-14 lg:top-24 font-semibold text-center text-xl flex gap-5 items-center '>
        <span className=''>{user.getUsername()}</span>
      </h2>
    </div>
  );
};
