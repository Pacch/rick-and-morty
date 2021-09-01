import { tw } from "twind";

interface IProps {
  image: string;
  name: string;
  status: string;
  species: string;
}

const CardItem: React.FC<IProps> = ({ image, name, status, species }) => {
  return (
    <div className={tw`flex-col`} data-testid="CardItem rounded-md">
      <div
        className={tw`p-2 max-w-[240px] mx-auto rounded-sm shadow-2xl flex flex-col h-full rounded-md`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      >
        <img
          src={image}
          alt={name}
          className={tw`rounded-sm w-[240px] h-[168px] object-cover mb-2`}
        />
        <div
          className={tw`px-4 py-4 flex-grow border border-white rounded-sm border-l-2 border-r-2 relative`}
        >
          <div
            className={tw`w-[7px] h-[7px] rounded-full bg-white absolute left-[-7px] top-[-5px]`}
          ></div>
          <div
            className={tw`w-[7px] h-[7px] rounded-full bg-white absolute right-[-7px] top-[-5px]`}
          ></div>
          <p className={tw`text-2xl font-medium text-white`}>{name}</p>
          <p className={tw`text-white`}>{status}</p>
          <p className={tw`text-white`}>{species}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
