import useScrollTop from "hooks/useScrollTop";
import { useState } from "react";
import useGetCharacters from "./useGetCharacters";
import IFitlers from "features/types/filtersType";

const useCharacters = () => {
  const DEFAULT_VALUE_FILTER = { name: "", status: null };
  const FIRST_PAGE = 1;
  const { handleScroll } = useScrollTop(0);
  const [currentPage, setCurrentPage] = useState(FIRST_PAGE);
  const [filters, setFilters] = useState<IFitlers>(DEFAULT_VALUE_FILTER);
  const { data, isLoading, isFetching, isError } = useGetCharacters({
    ...filters,
    page: currentPage,
  });

  const isLoadingFetching = isLoading || isFetching;

  const handleChangeCurrentPage = (newCurrentPage: number) => {
    setCurrentPage(newCurrentPage);
    handleScroll();
  };

  const handleChangeFilters = (filtersParams: IFitlers) => {
    setFilters(filtersParams);
    setCurrentPage(1);
    handleScroll();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newFilters = { ...filters, currentPage: 1 };
    setFilters(newFilters);
  };

  return {
    characters: data?.characters,
    isLoadingFetching,
    totalPages: data?.pages,
    count: data?.count,
    isError,
    currentPage,
    handleSubmit,
    handleChangeCurrentPage,
    handleChangeFilters,
  };
};

export default useCharacters;
