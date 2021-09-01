import Loading from "components/Loading";
import { tw } from "twind";

const LoaderCard: React.FC = () => {
  return (
    <div
      data-testid="LoadingCard"
      className={tw`border max-w-[240px] h-[280px] min-h-[280px] max-h-[280px] mx-auto rounded-sm shadow-2xl flex flex-col`}
    >
      <div className={tw`rounded-t-sm w-[240px] h-[168px]`}>
        <Loading />
      </div>
      <div className={tw`animate-pulse flex-grow px-2 py-3`}>
        <div className={tw`space-y-2`}>
          <div className={tw`h-4 bg-gray-400 rounded w-3/4`}></div>
          <div className={tw`h-4 bg-gray-400 rounded`}></div>
          <div className={tw`h-4 bg-gray-400 rounded w-5/6`}></div>
        </div>
      </div>
    </div>
  );
};

export default LoaderCard;
