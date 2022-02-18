import { useState, useCallback } from 'react';

import { useDropzone } from 'react-dropzone';

import { ReactComponent as FileLogo } from './../assets/icons/Image.svg';

export const DragDropFile = ({ setFile = Function.prototype }) => {
  const maxSizeFile = 1e8;
  const onDrop = useCallback((acceptedFiles) => {
    const file = Object.assign(acceptedFiles[0], {
      preview: URL.createObjectURL(acceptedFiles[0]),
    });
    setFile(file);
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: [
        'image/jpg',
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/svg+xml',
        'audio/webm',
        'video/webm',
        'audio/mpeg',
        'audio/MPA',
        'audio/mpa-robust',
        'video/mp4',
        'audio/mp4',
        'application/mp4',
      ],
      maxSize: maxSizeFile,
    });

  return (
    <>
      <label className='font-bold flex flex-col text-xl'>Upload File</label>
      <div
        {...getRootProps()}
        className={`border-dashed border-2 font-bold items-center p-6 rounded-lg text-sm hover:opacity-60 cursor-pointer 
        ${isDragReject ? 'border-red' : 'border-gray-light'}`}
      >
        <input {...getInputProps()} />
        {isDragReject ? (
          <div className='text-center'>
            Oops! This app only supports JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max
            100mb.
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center gap-5'>
            <span>JPG, PNG, GIF, SVG, WEBM, MP3, MP4. Max 100mb.</span>
            <FileLogo
              width={137}
              height={137}
              className={'fill-dark dark:fill-white'}
            />
            <div className='flex flex-col items-center'>
              Drag and Drop File
              <br />
              <span className='font-normal'>on</span> browse media on your
              device
            </div>
          </div>
        )}
      </div>
    </>
  );
};
