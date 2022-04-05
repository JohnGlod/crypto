
export const UserProfile = ({ user, testSrc, bannerSrc }) => {
  return (
    <div className='pt-5 relative mb-20 flex flex-col items-center'>
      <img
        className='w-full lg:h-[300px] object-cover object-center h-[200px] '
        src={
          bannerSrc
            ? bannerSrc
            : 'https://img.freepik.com/free-vector/neon-lights-background-theme_52683-44625.jpg?size=626&ext=jpg'
        }
        alt='banner'
      />
      <div className={`absolute top-2/4 left-2/4 -translate-x-2/4 `}>
        <div className='rounded-full border-4 border-dark w-32 h-32 lg:w-56 lg:h-56'>
          <img
            className={`w-full h-full rounded-full object-cover object-center`}
            src={testSrc}
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
