import { tw } from "twind";
import createRange from "helpers/rangeHelper";
import LoadingCard from "./LoadingCard";

const LoadingHome = () => {
  const ITEMS_LOADER = createRange({ end: 36 });

  return (
    <div
      className={tw`grid justify-center gap-4`}
      style={{ gridTemplateColumns: "repeat(auto-fill, 400px)" }}
    >
      {ITEMS_LOADER.map((item: number) => {
        return <LoadingCard key={item} />;
      })}
    </div>
  );
};
export default LoadingHome;
