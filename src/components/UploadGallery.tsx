import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { useState } from 'react';

import Grid from './Grid';
import Image from './Image';
import SortableImage from './SortableImage';

interface ImageProps {
  id: number;
  url: string;
  isFeatured: boolean;
}

interface setImages {
  setImages: () => void;
}

type ImageArray = ImageProps[];

const UploadGallery: React.FC = ({images,  setImages}) => {
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setImages((images) => {
        const oldIndex = images.indexOf(active.id);
        const newIndex = images.indexOf(over.id);

        return arrayMove(images, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={images} strategy={rectSortingStrategy}>
        <Grid columns={5}>
          {images.map((image, index) => (
            <SortableImage key={image.id} url={image} index={index} />
          ))}
        </Grid>
      </SortableContext>
      <DragOverlay adjustScale={true}>
        {activeId ? (
          <Image url={activeId} index={images.indexOf(activeId)} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default UploadGallery;
