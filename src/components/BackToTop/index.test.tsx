import BackToTop from "./index";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("BackToTopComponent", () => {
  beforeAll(() => {
    (window as any).pageYOffset = 0;
  });

  it("should buttom is not visible", () => {
    render(<BackToTop />);
    fireEvent.scroll(window, { target: { scrollY: 0 } });
    const element = screen.getByTestId("backToTop");
    expect(element).toHaveClass("invisible");
  });
  it("should buttom is visible", async () => {
    render(<BackToTop />);
    (window as any).pageYOffset = 500;
    fireEvent.scroll(window, { target: { scrollY: 500 } });
    await waitFor(() => {
      const element = screen.getByTestId("backToTop");
      expect(element).toHaveClass("visible");
    });
  });
  it("should scrollToTop when button is clicked", async () => {
    render(<BackToTop />);
    (window as any).pageYOffset = 500;
    (window as any).scrollTo = jest.fn();
    fireEvent.scroll(window, { target: { scrollY: 500 } });
    const element = screen.getByTestId("backToTop");
    userEvent.click(element);
    expect(window.scrollTo).toHaveBeenCalled();
  });
});
