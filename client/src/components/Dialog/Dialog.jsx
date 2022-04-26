export const Dialog = ({ active, setActive, children }) => (
  <div
    className={`h-full w-full dark:bg-black-2 bg-[#bbbbbd] fixed inset-0  justify-center items-center z-10 transition-opacity ease-in  duration-700   ${
      active
        ? 'flex  opacity-100 pointer-events-auto'
        : 'hidden pointer-events-none opacity-0'
    }`}
    onClick={() => setActive(false)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className={`w-3/4 lg:w-2/4 bg-white dark:bg-dark text-dark dark:text-white p-5 rounded-lg max-h-[600px] min-h-[320px] transition-transform ease-in  duration-700 ' ${
        active ? 'scale-100' : 'scale-50'
      }`}
    >
      {children}
    </div>
  </div>
);
