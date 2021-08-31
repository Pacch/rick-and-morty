import LoadingCards from "./LoadingCards";
import Pagination from "components/Pagination";
import { tw } from "twind";
import CardItem from "./CardItem";
import NotFound from "./NotFound";

interface ICharacters {
  name: string;
  id: string;
  image: string;
  status: string;
  species: string;
}

interface IProps {
  isLoading: boolean;
  isError: boolean;
  characters?: ICharacters[] | null;
  currentPage: number;
  totalPages?: number;
  handleChangeCurrentPage: (value: number) => void;
}

const Characters: React.FC<IProps> = ({
  isLoading,
  isError,
  characters,
  currentPage,
  totalPages,
  handleChangeCurrentPage,
}) => {
  if (isLoading) {
    return <LoadingCards />;
  }

  if (isError) {
    return <NotFound />;
  }
  return (
    <div className="grid gap-4 h-full flex-grow">
      <div
        className={tw`flex-grow grid justify-center gap-4 
        grid-cols-[repeat(auto-fill,minmax(240px,1fr))] 
        lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]  
        xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]`}
      >
        {characters?.map((character) => {
          return <CardItem {...character} key={character.id} />;
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChangeCurrentPage={handleChangeCurrentPage}
      />
    </div>
  );
};

export default Characters;
