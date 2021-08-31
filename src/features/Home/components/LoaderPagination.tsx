import { tw } from "twind";

const LoaderPagination: React.FC = () => {
  return (
    <div
      className={tw`h-[111px] sm:h-[86px] max-w-[300px] flex justify-center flex-col space-y-2 mx-auto`}
    >
      <div className={tw`h-4 bg-gray-400 rounded w-full`}></div>
      <div className={tw`h-4 bg-gray-400 rounded w-full`}></div>
    </div>
  );
};

export default LoaderPagination;
