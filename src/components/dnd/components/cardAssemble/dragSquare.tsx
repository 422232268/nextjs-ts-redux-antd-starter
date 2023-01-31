import DragCard from './dragCard';
import styles from "./index.module.scss";

export default function DragSquare({ dragCardList, updateDragAndDrop }: any) {
  return (
    <div className={styles['card_drag_group']}>
      {dragCardList.map((each: any, index: any) => (
        <DragCard index={index} {...each} key={'drag_card' + index} updateDragAndDrop={updateDragAndDrop}/>
      ))}
    </div>
  );
}
