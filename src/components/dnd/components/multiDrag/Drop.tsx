import { useCallback } from 'react';
import { useDrop } from 'react-dnd';
import styles from "./index.module.scss";

export default function DropSquare({ dropCardList, updateDragAndDrop }: any) {
  const [{ canDrop }, drop] = useDrop({
    accept: 'DragDropBox',

    canDrop: (_item, monitor) => {
      return true;
    },
    collect: (monitor) => ({
      canDrop: !!monitor.canDrop(),
    }),
  });


  return (
    <div className={styles['card_drop_group']} ref={drop}>
    </div>
  );
}
