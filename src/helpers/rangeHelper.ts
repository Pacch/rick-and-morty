export const createRange = ({
  end,
  start = 1,
}: {
  end: number;
  start?: number;
}) => {
  const createArray = Array.from(Array(end).keys());
  const result = [...createArray].map((item: number) => item + start);
  return result;
};

export default createRange;
