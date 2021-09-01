import { render, screen } from "@testing-library/react";
import Layout from "./index";

describe("LayoutComponent", () => {
  it("should LayoutComponent render", () => {
    render(<Layout />);
    const element = screen.getByTestId("Layout");
    expect(element).toBeInTheDocument();
  });
});
