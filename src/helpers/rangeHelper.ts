export const createRange = ({
  end,
  start = 1,
}: {
  end: number;
  start?: number;
}) => {
  const createArray = Array.from(Array(end).keys());
  return [...createArray].map((item: number) => item + start);
};

export default createRange;
