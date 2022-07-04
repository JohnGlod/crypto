import cn from 'classnames';

import placeholder from './image/placeholder.jpg';
import { PictureItemProps } from './PictureItem.props';

export const PictureItem = ({
  pictureImage,
  pictureName,
  className,
}: PictureItemProps) => (
  <object
    className={cn('object-cover object-center rounded-lg', className)}
    data={pictureImage}
    type='image/jpg'
  >
    <img
      className={cn('object-cover object-center rounded-lg', className)}
      src={placeholder}
      alt={pictureName}
    />
  </object>
);
