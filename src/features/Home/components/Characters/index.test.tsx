import { render, screen } from "@testing-library/react";
import Characters from "./index";

describe("CharactersComponent", () => {
  const mockItem = [
    {
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      id: 1,
    },
  ];
  const handleChangeCurrentPage = jest.fn();
  it("should CharactersComponent render", () => {
    render(
      <Characters
        characters={mockItem}
        isLoading={false}
        isError={false}
        currentPage={1}
        totalPages={1}
        handleChangeCurrentPage={handleChangeCurrentPage}
      />
    );
    const element = screen.getByTestId("Characters");
    expect(element).toBeInTheDocument();
  });
  it("should CharactersComponent isLoading", () => {
    render(
      <Characters
        characters={mockItem}
        isLoading={true}
        isError={false}
        currentPage={1}
        totalPages={1}
        handleChangeCurrentPage={handleChangeCurrentPage}
      />
    );
    const element = screen.getByTestId("LoadingCards");
    expect(element).toBeInTheDocument();
  });
  it("should CharactersComponent isError", () => {
    render(
      <Characters
        characters={mockItem}
        isLoading={false}
        isError={true}
        currentPage={1}
        totalPages={1}
        handleChangeCurrentPage={handleChangeCurrentPage}
      />
    );
    const element = screen.getByTestId("NotFound");
    expect(element).toBeInTheDocument();
  });
});
