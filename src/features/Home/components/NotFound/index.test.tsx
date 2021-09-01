import { render, screen } from "@testing-library/react";
import NotFound from "./index";

describe("NotFoundComponent", () => {
  it("should NotFoundComponent render", () => {
    render(<NotFound />);
    const element = screen.getByTestId("NotFound");
    expect(element).toBeInTheDocument();
  });
});
