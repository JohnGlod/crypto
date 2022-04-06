export const CustomContainer = ({ style = '' ,children }) => {
  return (
    <div className={`w-full p-5 flex gap-5 max-w-screen-2xl mx-auto dark:text-white min-h-fit ${style}`}>
      {children}
    </div>
  );
};
