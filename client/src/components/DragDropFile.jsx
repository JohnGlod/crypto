import { useState } from 'react';
import { ReactComponent as FileLogo } from './../assets/icons/Image.svg';
import { GrCheckmark } from 'react-icons/gr';

export const DragDropFile = () => {
  const maxSizeFile = 1e8;
  const [media, setMedia] = useState([]);
  const [dragging, setDragging] = useState(false);

  const dragStartHandler = (e) => {
    e.preventDefault();
    setDragging(true);
  };
  const dragLeaveHandler = (e) => {
    e.preventDefault();
    setDragging(false);
  };
  const onDropHandler = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = [...e.dataTransfer.items]
      .filter((item) => item.kind === 'file')
      .map((item) => item.getAsFile());
    console.log(files);
    setMedia({
      file: files[0],
      progress: 0,
    });
    console.log(`file`, media);
  };
  return true ? (
    <div>
      <div className='flex justify-between flex-col items-center justify-center'>
        <div className='bg-white h-[120px] w-[120px] rounded-full flex  items-center justify-center'>
          <GrCheckmark fontSize={'96px'} className='text-green-500' />
        </div>

        <div>
          {media.map((item, id) => (
            <div key={id}>
              <span>{item.file.name}</span>
              <div>
                <div>{item.progress}</div>
                <div className='cursor-pointer ' onClick={() => setMedia([])}>
                  X
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div
      onDragStart={(e) => dragStartHandler(e)}
      onDragLeave={(e) => dragLeaveHandler(e)}
      onDragOver={(e) => dragStartHandler(e)}
      onDrop={(e) => onDropHandler(e)}
    >
      <label className='font-bold flex flex-col text-xl  relative'>
        Upload File
        <div
          className={`mt-5 border-dashed border-2  flex flex-col font-bold items-center p-6 rounded-lg items-center justify-center text-sm gap-[20px] hover:opacity-60 cursor-pointer ${
            dragging ? 'border-red' : 'border-gray-light'
          }`}
        >
          <span>JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.</span>
          <FileLogo
            width={137}
            height={137}
            className={'fill-dark dark:fill-white'}
          />
          <div className='flex flex-col items-center'>
            Drag and Drop File
            <br />
            <span className='font-normal'>on</span> browse media on your device
          </div>
        </div>
        <input
          type='file'
          accept='.png, .jpg, .jpeg, .gif, .svg, .webm, .mp3, .mp4'
          size={maxSizeFile}
          className={`sr-only`}
        />
      </label>
    </div>
  );
};
