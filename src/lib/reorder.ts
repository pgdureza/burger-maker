const reorder = <T>(list: T[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const remove = <T>(list: T[], startIndex: number) => {
  const result = Array.from(list);
  return result.filter((item, index) => index !== startIndex);
};

export { remove, reorder };
