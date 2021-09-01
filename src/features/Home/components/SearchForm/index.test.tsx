import { fireEvent, render, screen } from "@testing-library/react";
import SearchForm from "./index";

describe("SearchFormComponent", () => {
  it("should SearchFormComponent render", () => {
    const onChangeFilters = jest.fn();
    render(<SearchForm isLoading={false} onChangeFilters={onChangeFilters} />);
    const element = screen.getByTestId("SearchForm");
    expect(element).toBeInTheDocument();
  });
  it("should SearchFormComponent onChange Input", () => {
    const onChangeFilters = jest.fn();
    render(<SearchForm isLoading={false} onChangeFilters={onChangeFilters} />);
    const input = screen.queryByPlaceholderText("Search by name");
    fireEvent.change(input, { target: { value: "prueba" } });
    expect(input.value).toBe("prueba");
  });
  it("should SearchFormComponent button CleanForm is Disabled", () => {
    const onChangeFilters = jest.fn();
    const handleCleanForm = jest.fn();
    render(<SearchForm isLoading={false} onChangeFilters={onChangeFilters} />);
    const buttons = screen.queryAllByTestId("Button");
    const buttonClean = buttons[1];
    fireEvent.click(buttonClean);
    expect(handleCleanForm).toHaveBeenCalledTimes(0);
    expect(buttonClean).toBeDisabled();
  });
});
