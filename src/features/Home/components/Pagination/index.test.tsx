import { fireEvent, render, screen } from "@testing-library/react";
import Pagination from "./index";

describe("PaginationComponent", () => {
  it("should PaginationComponent render", () => {
    const handleChangeCurrentPage = jest.fn();
    render(
      <Pagination
        currentPage={1}
        onChangeCurrentPage={handleChangeCurrentPage}
        totalPages={5}
      />
    );
    const element = screen.getByTestId("Pagination");
    expect(element).toBeInTheDocument();
  });
  it("should PaginationComponent clicked buttonPrev when currentPage is 1", () => {
    const handleChangeCurrentPage = jest.fn();
    render(
      <Pagination
        currentPage={1}
        onChangeCurrentPage={handleChangeCurrentPage}
        totalPages={5}
      />
    );
    const button = screen.getByTestId("Prev");
    fireEvent.click(button);
    expect(button).toBeDisabled();
    expect(handleChangeCurrentPage).toHaveBeenCalledTimes(0);
  });
  it("should PaginationComponent clicked buttonPrev when currentPage is 2", () => {
    const handleChangeCurrentPage = jest.fn();
    render(
      <Pagination
        currentPage={2}
        onChangeCurrentPage={handleChangeCurrentPage}
        totalPages={5}
      />
    );
    const button = screen.getByTestId("Prev");
    fireEvent.click(button);
    expect(button).not.toBeDisabled();
    expect(handleChangeCurrentPage).toHaveBeenCalledTimes(1);
  });
  it("should PaginationComponent clicked buttonNext when currentPage is 1 and TotalPages is 1", () => {
    const handleChangeCurrentPage = jest.fn();
    render(
      <Pagination
        currentPage={1}
        onChangeCurrentPage={handleChangeCurrentPage}
        totalPages={1}
      />
    );
    const button = screen.getByTestId("Next");
    fireEvent.click(button);
    expect(button).toBeDisabled();
    expect(handleChangeCurrentPage).toHaveBeenCalledTimes(0);
  });
  it("should PaginationComponent clicked buttonNext when currentPage is 1 and TotalPages is 2", () => {
    const handleChangeCurrentPage = jest.fn();
    render(
      <Pagination
        currentPage={1}
        onChangeCurrentPage={handleChangeCurrentPage}
        totalPages={3}
      />
    );
    const button = screen.getByTestId("Next");
    fireEvent.click(button);
    expect(button).not.toBeDisabled();
    expect(handleChangeCurrentPage).toHaveBeenCalledTimes(1);
  });

  it("should PaginationComponent is totalPage and currentPage", () => {
    const handleChangeCurrentPage = jest.fn();
    render(
      <Pagination
        currentPage={5}
        onChangeCurrentPage={handleChangeCurrentPage}
        totalPages={10}
      />
    );
    const element = screen.getByTestId("Pagination");
    expect(element).toHaveTextContent("5");
    expect(element).toHaveTextContent("10");
  });
});
