import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./index";

describe("ButtonComponent", () => {
  it("should ButtonComponent render", () => {
    render(<Button />);
    const element = screen.getByTestId("Button");
    expect(element).toBeInTheDocument();
  });

  it("should ButtonComponent is disabled", () => {
    render(<Button disabled={true} />);
    const element = screen.getByTestId("Button");
    expect(element).toBeDisabled();
  });
  it("should ButtonComponent is not disabled", () => {
    render(<Button disabled={false} />);
    const element = screen.getByTestId("Button");
    expect(element).not.toBeDisabled();
  });
  it("should ButtonComponent is with text", () => {
    render(<Button>visible</Button>);
    const element = screen.getByTestId("Button");
    expect(element.textContent).toBe("visible");
  });
  it("should calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("should calls onClick when is disabled", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled={true}>
        Click Me
      </Button>
    );
    fireEvent.click(screen.getByText(/click me/i));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
