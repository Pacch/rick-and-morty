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
        className={tw`border max-w-[240px] mx-auto rounded-sm shadow-card flex flex-col h-full`}
      >
        <img
          src={image}
          alt={name}
          className={tw`rounded-t-xsm w-[240px] h-[168px] object-cover	`}
        />
        <div className={tw`px-md py-lg flex-grow`}>
          <p className={tw`text-xxlg font-medium`}>{name}</p>
          <p>{status}</p>
          <p>{species}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
