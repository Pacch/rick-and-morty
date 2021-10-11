import { tw } from "twind";
import createRange from "helpers/rangeHelper";
import LoadingCard from "../LoadingCard";

const LoadingCards = () => {
  const NUMBERS_CARDS = 36;
  const ITEMS_LOADER = createRange({ end: NUMBERS_CARDS });

  return (
    <div data-testid="LoadingCards">
      <div className={tw`max-w-[140px] mx-auto h-[36px] mb-4 animate-pulse`}>
        <div className={tw`h-5 bg-black rounded w-full`}></div>
      </div>
      <div
        className={tw`grid justify-center gap-4 
        grid-cols-[repeat(auto-fill,minmax(240px,1fr))]`}
      >
        {ITEMS_LOADER.map((item: number) => {
          return <LoadingCard key={item} />;
        })}
      </div>
    </div>
  );
};
export default LoadingCards;
