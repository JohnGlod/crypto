import { DetailedHTMLProps, ObjectHTMLAttributes } from 'react';

export interface PictureItemProps
  extends DetailedHTMLProps<
    ObjectHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  pictureImage: string | undefined;
  pictureName: string | undefined;
  className?: string;
}
