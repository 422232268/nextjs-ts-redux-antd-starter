import { CSSProperties, FC, useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import styles from "./index.module.scss";

const DragCard = ({ text, id, index, updateDragAndDrop, isHovering }: any) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'DragDropBox',
    item: { id, index, updateDragAndDrop },
    end: (item, monitor) => {
      if (!monitor.didDrop()) {
        updateDragAndDrop(id);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      className={styles['card_drag']}
      ref={drag}
      style={{
        opacity: isDragging || isHovering ? 0.5 : 1,
      }}
    >
      {text}
    </div>
  );
};
export default DragCard;
