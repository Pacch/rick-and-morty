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
    name,
    status,
    handleChangeCurrentPage,
    handleChangeName,
    handleSubmit,
    handleChangeSelect,
    handleCleanForm,
  } = useCharacters();

  return (
    <Layout>
      <SearchForm
        handleChangeName={handleChangeName}
        handleSubmit={handleSubmit}
        handleChangeSelect={handleChangeSelect}
        handleCleanForm={handleCleanForm}
        isLoading={isLoadingFetching}
        name={name}
        status={status}
      />
      <Characters
        isLoading={isLoadingFetching}
        isError={isError}
        characters={characters}
        totalPages={totalPages}
        currentPage={currentPage}
        handleChangeCurrentPage={handleChangeCurrentPage}
      />
      <BackToTop />
    </Layout>
  );
};

export default Home;
