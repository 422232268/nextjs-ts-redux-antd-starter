import React, {
  FC,
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useMemo,
} from 'react';

import { IDataItem, IStyleState } from './interface';

import { getData } from './store/data';
import styles from './index.module.css';
console.log(styles);
export type IProps = {
  itemSize?: number;
  itemCount?: number;
  bufferCount?: number;
  listData: Array<IDataItem>;
};

const FixedHeightList: FC<IProps> = ({
  itemSize = 30,
  itemCount = 10,
  bufferCount = 3,
  listData = [],
}: IProps) => {
  const allDataRef: any = useRef([]); // 汇总数据
  const scrollRef: any = useRef(null); // 滚动元素：用来获取scrollTop
  // 缓存区大小
  const bufferSize = useMemo(
    () => bufferCount * itemSize,
    [bufferCount, itemSize]
  );

  const [styleState, dispatchStyle] = useReducer(
    (state: Object, action: any): IStyleState => {
      return { ...state, ...action.payload };
    },
    {
      scrollHeight: 0,
      visibleHeight: itemCount * itemSize,
      offset: 0,
      listData: [],
    }
  );
  /**
   * @description: 监听滚动
   * @param {*}
   * @return {*}
   */
  const handleScroll = useCallback(() => {
    const { scrollTop } = scrollRef.current;

    // 优化：滚动超过一条元素大小时再重新调整数据(bufferSize区域无效)
    if (Math.abs(scrollTop - styleState.offset - bufferSize) > itemSize) {
      console.log(scrollTop - styleState.offset - bufferSize);

      const { current: data } = allDataRef;

      // 计算当前数据起止index
      const _startIndex = Math.floor(scrollTop / itemSize) - bufferCount;
      const _endIndex = _startIndex + itemCount + bufferCount * 2;

      // 起止index映射到数据中
      const startIndex = Math.max(_startIndex, 0);
      const endIndex = Math.min(_endIndex, data.length);

      console.log('rendering');
      dispatchStyle({
        payload: {
          listData: data.slice(startIndex, endIndex),
          offset:
            _startIndex < 0
              ? 0
              : scrollTop - bufferSize - (scrollTop % itemSize), //设置可视窗口偏移量
        },
      });
    }
  }, [bufferCount, bufferSize, itemCount, itemSize, styleState.offset]);

  useEffect(() => {
    allDataRef.current = listData.length ? listData : getData();
  }, [itemCount, itemSize, listData]);
  return (
    <div
      className={styles['wrapper']}
      style={{ height: styleState.visibleHeight }}
      onScroll={handleScroll}
      ref={scrollRef}
    >
      <div
        className={styles[`list-phantom`]}
        style={{ height: styleState.scrollHeight }}
      ></div>
      <ul
        style={{
          transform: `translateY(${styleState.offset}px)`,
        }}
        className={styles[`list`]}
      >
        {styleState.listData.map(({ number, name }) => (
          <li
            key={number}
            style={{ height: itemSize, lineHeight: `${itemSize}px` }}
            className={
              number % 2 === 0 ? styles[`green-item`] : styles[`red-item`]
            }
          >
            {number} - {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FixedHeightList;
