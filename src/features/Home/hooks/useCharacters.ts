import useScrollTop from "hooks/useScrollTop";
import { useState, useEffect } from "react";
import useGetCharacters from "./useGetCharacters";

interface ICharacters {
  id: string;
  name: string;
  species: string;
  status: string;
  image: string;
}

interface ISelect {
  value: string;
  label: string;
}

const useCharacters = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [name, setName] = useState("");
  const [status, setStatus] = useState<null | "alive" | "dead" | "unknown">(
    null
  );
  const { handleScroll } = useScrollTop(0);
  const [characters, setCharacters] = useState<null | ICharacters[]>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [getData, setGetData] = useState(false);
  const { data, isLoading, refetch, isFetching, isError } = useGetCharacters({
    page: currentPage,
    status,
    name,
  });

  const isLoadingFetching = isLoading || isFetching;

  useEffect(() => {
    if (!isLoadingFetching && !isError) {
      setCharacters(data!.characters);
      setTotalPages(data!.pages);
    }
  }, [isLoadingFetching, isError, data]);

  const handleChangeCurrentPage = (newCurrentPage: number) => {
    handleScroll();
    setCurrentPage(newCurrentPage);
    setGetData(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentPage(1);
    setGetData(true);
  };

  const handleChangeName = (value: string) => {
    setName(value);
  };

  const handleChangeSelect = (e: ISelect | null | undefined) => {
    setStatus(e?.value as null | "alive" | "dead" | "unknown");
  };

  const handleCleanForm = () => {
    setName("");
    setCurrentPage(1);
    setGetData(true);
  };

  useEffect(() => {
    if (getData) {
      refetch();
      setGetData(false);
    }
  }, [getData, refetch]);

  return {
    characters,
    isLoadingFetching,
    totalPages,
    isError,
    currentPage,
    name,
    status,
    handleChangeName,
    handleChangeSelect,
    handleSubmit,
    handleChangeCurrentPage,
    handleCleanForm,
  };
};

export default useCharacters;
