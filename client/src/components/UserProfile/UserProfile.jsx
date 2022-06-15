export const UserProfile = ({ user, avatar, banner }) => {
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
            src={avatar}
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
