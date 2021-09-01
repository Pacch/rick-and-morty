import { render, screen } from "@testing-library/react";
import LoadingCards from "./index";

describe("LoadingCardsComponent", () => {
  it("should LoadingCardComponent render", () => {
    render(<LoadingCards />);
    const element = screen.getByTestId("LoadingCards");
    expect(element).toBeInTheDocument();
  });
});
