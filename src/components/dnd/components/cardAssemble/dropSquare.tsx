import DropPlace from './dropPlace';
import styles from "./index.module.scss";

export default function DropSquare({ dropCardList, updateDragAndDrop }: any) {

  return (
    <div className={styles['card_drop_group']}>
      {dropCardList.map((each: any, index: number) => (
        <DropPlace key={'drop_place' + index} {...each} index={index} updateDragAndDrop={updateDragAndDrop}/>
      ))}
    </div>
  );
}
