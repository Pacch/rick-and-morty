import { render, screen } from "@testing-library/react";
import PageNotFound from "./index";
import { BrowserRouter as Router } from "react-router-dom";

describe("PageNotFoundComponent", () => {
  it("should PageNotFoundComponent render", () => {
    render(
      <Router>
        <PageNotFound />
      </Router>
    );
    const element = screen.getByTestId("PageNotFound");
    expect(element).toBeInTheDocument();
  });
});
