import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FC } from 'react';

import Image from './Image';

interface Props {
  id: number;
  index: number;
  url: string;
  isFeatured: boolean;
}

const SortableImage: FC<Props> = (props) => {
  const sortable = useSortable({ id: props.index });
  const {
    attributes,
    listeners,
    isDragging,
    setNodeRef,
    transform,
    transition,
  } = sortable;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Image
      ref={setNodeRef}
      style={style}
      {...props}
      {...attributes}
      {...listeners}
    />
  );
};

export default SortableImage;
