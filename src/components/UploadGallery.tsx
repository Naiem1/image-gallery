import { DndContext } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import Grid from './Grid';
import Image from './Image';
import SortableImage from './SortableImage';

interface Image {
  id: number;
  url: string;
  isFeatured: boolean;
}

type ImageArray = Image[];

const UploadGallery: React.FC<{ images: ImageArray }> = ({ images }) => {
  return (
    <DndContext>
      <SortableContext items={images} strategy={rectSortingStrategy}>
        <Grid columns={4}>
          {images.map((image, index) => (
            <SortableImage key={image.id} url={image} index={index} />
          ))}
        </Grid>
      </SortableContext>
    </DndContext>
  );
};

export default UploadGallery;
