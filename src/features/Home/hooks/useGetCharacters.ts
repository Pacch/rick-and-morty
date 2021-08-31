import { useQuery } from "react-query";
import domain from "@domain";

interface IParams {
  page: number;
  name?: string;
  status?: "alive" | "dead" | "unknown" | null;
}

interface ICharacters {
  id: string;
  name: string;
  species: string;
  status: string;
  image: string;
}

const useGetCharacters = ({ page = 1, name, status }: IParams) => {
  console.log(page, name, status);
  const QUERYKEY = "characters";
  const CONFIG_CACHE = {
    enabled: true,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: 60 * 1000 * 60 * 24,
    keepPreviousData: true,
  };
  return useQuery<{ pages: number; characters: ICharacters[] }, Error>(
    [QUERYKEY, page, name, status],
    () =>
      domain.get_characters_use_case.execute({
        page,
        name,
        status,
      }),
    CONFIG_CACHE
  );
};

export default useGetCharacters;
