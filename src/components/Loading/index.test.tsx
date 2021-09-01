import { render, screen } from "@testing-library/react";
import Loading from "./index";

describe("LoadingComponent", () => {
  it("should LoadingComponent render", () => {
    render(<Loading />);
    const element = screen.getByTestId("Loading");
    expect(element).toBeInTheDocument();
  });
});
