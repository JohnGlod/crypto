import { FilePrewieProps } from './UIFilePrewie.props';

export const UIFilePrewie = ({
  fileName,
  fileSrc,
  fileType,
}: FilePrewieProps) => (
  <div className='w-full p-5 outline-none border border-solid border-gray-light rounded-lg font-semibold text-center'>
    File name: <span className='font-normal'>{fileName} </span>
    <div className='flex items-center justify-center p-4 '>
      {fileType.substr(0, 5) === 'image' ? (
        <img src={fileSrc} alt='preview' className='w-fit h-fit rounded-lg' />
      ) : (
        <video width='480' controls poster={fileSrc}>
          <source src={fileSrc} type={fileType} />
          Your browser doesn't support HTML5 video tag.
        </video>
      )}
    </div>
  </div>
);
