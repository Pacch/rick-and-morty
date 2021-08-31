import ImageNotFound from "assets/not_found.jpg";
import { tw } from "twind";

const NotFound: React.FC = () => {
  return (
    <div className={tw`flex flex-col items-center`}>
      <img
        className={tw`mb-[20px] h-[202px] w-auto`}
        src={ImageNotFound}
        alt="not_found"
      />
      <p className={tw`text-center text-3xl`}>No results found</p>
    </div>
  );
};

export default NotFound;
