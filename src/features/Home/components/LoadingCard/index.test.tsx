import { render, screen } from "@testing-library/react";
import LoadingCard from "./index";

describe("LoadingCardComponent", () => {
  it("should LoadingCardComponent render", () => {
    render(<LoadingCard />);
    const element = screen.getByTestId("LoadingCard");
    expect(element).toBeInTheDocument();
  });
});
