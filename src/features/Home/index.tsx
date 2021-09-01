import Layout from "components/Layout";
import useCharacters from "./hooks/useCharacters";
import SearchForm from "./components/SearchForm";
import Characters from "./components/Characters";
import BackToTop from "components/BackToTop";

const Home: React.FC = () => {
  const {
    characters,
    isLoadingFetching,
    totalPages,
    isError,
    currentPage,
    count,
    handleChangeCurrentPage,
    handleChangeFilters,
  } = useCharacters();

  return (
    <Layout>
      <SearchForm
        isLoading={isLoadingFetching}
        onChangeFilters={handleChangeFilters}
      />
      <Characters
        isLoading={isLoadingFetching}
        isError={isError}
        characters={characters}
        totalPages={totalPages}
        count={count}
        currentPage={currentPage}
        handleChangeCurrentPage={handleChangeCurrentPage}
      />
      <BackToTop />
    </Layout>
  );
};

export default Home;
