import { tw } from "twind";

interface IProps {
  image: string;
  name: string;
  status: string;
  species: string;
}

const CardItem: React.FC<IProps> = ({ image, name, status, species }) => {
  return (
    <div className={tw`flex-col`}>
      <div
        className={tw`bg-${status.toLocaleLowerCase()} p-2 max-w-[240px] mx-auto rounded-sm shadow-card flex flex-col h-full`}
      >
        <img
          src={image}
          alt={name}
          className={tw`rounded-sm w-[240px] h-[168px] object-cover mb-2`}
        />
        <div
          className={tw`px-md py-lg flex-grow border border-black rounded-sm border-l-2 border-r-2 relative`}
        >
          <div
            className={tw`w-[7px] h-[7px] rounded-full bg-black absolute left-[-7px] top-[-5px]`}
          ></div>
          <div
            className={tw`w-[7px] h-[7px] rounded-full bg-black absolute right-[-7px] top-[-5px]`}
          ></div>
          <p className={tw`text-xxlg font-medium`}>{name}</p>
          <p>{status}</p>
          <p>{species}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
