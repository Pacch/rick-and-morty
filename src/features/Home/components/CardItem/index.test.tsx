import { render, screen } from "@testing-library/react";
import CardItem from "./index";

describe("CardItemComponent", () => {
  it("should CardItemComponent render", () => {
    const mockItem = {
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
    };
    render(
      <CardItem
        image={mockItem.image}
        name={mockItem.name}
        status={mockItem.status}
        species={mockItem.species}
      />
    );
    const element = screen.getByTestId("CardItem");
    expect(element).toBeInTheDocument();
  });

  it("should CardItemComponent is props", () => {
    const mockItem = {
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
    };
    render(
      <CardItem
        image={mockItem.image}
        name={mockItem.name}
        status={mockItem.status}
        species={mockItem.species}
      />
    );
    const element = screen.getByTestId("CardItem");
    const image = screen.getByAltText(mockItem.name);
    expect(element).toHaveTextContent(mockItem.name);
    expect(element).toHaveTextContent(mockItem.status);
    expect(element).toHaveTextContent(mockItem.species);
    expect(image).toHaveAttribute("src", mockItem.image);
  });
});
