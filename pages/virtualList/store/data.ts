/**
 * @description: 模拟数据构造
 * @param {number} total
 * @return {Array<IDataItem>}
 */
export const getData = (
  total: number = 1000
): Array<any> => {
  const arr = [];
  const nameArr = ['Alice', 'July', 'Roman', 'David', 'Sara', 'Lisa', 'Mike'];
  for (let i = 0; i < total; i++) {
    arr.push({
      number: i + 1,
      name: `${nameArr[i % nameArr.length]}`
    });
  }
  return arr;
};
