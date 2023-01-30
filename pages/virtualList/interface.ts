interface IDataItem {
  number: number;
  name: string;
}

interface IStyleState {
  scrollHeight: number;
  visibleHeight: number;
  offset: number;
  listData: Array<IDataItem>;
}

export type { IDataItem, IStyleState };
