import { tw } from "twind";
import createRange from "helpers/rangeHelper";
import LoadingCard from "./LoadingCard";
import LoaderPagination from "./LoaderPagination";

const LoadingCards = () => {
  const NUMBERS_CARDS = 36;
  const ITEMS_LOADER = createRange({ end: NUMBERS_CARDS });

  return (
    <div>
      <LoaderPagination></LoaderPagination>

      <div
        className={tw`grid justify-center gap-4 
        grid-cols-[repeat(auto-fill,minmax(240px,1fr))] 
        lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]  
        xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]`}
      >
        {ITEMS_LOADER.map((item: number) => {
          return <LoadingCard key={item} />;
        })}
      </div>
      <LoaderPagination></LoaderPagination>
    </div>
  );
};
export default LoadingCards;
