import React, { useState } from "react";
import { tw } from "twind";
import Icon from "components/Icon";

interface IPropsNavigation {
  disabled?: boolean;
  children?: React.ReactNode;
  onClick: () => void;
}

const NavigationButton: React.FC<IPropsNavigation> = ({
  children,
  disabled,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={tw` w-[60px] h-[60px] bg-green-400 rounded-full border-4 border-white focus:outline-none flex items-center justify-center ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};

interface Props {
  currentPage: number;
  totalPages?: number;
  onChangeCurrentPage: (value: number) => void;
}

interface IParams {
  value?: string | null;
  max: number;
}

const Pagination: React.FC<Props> = ({
  currentPage = 1,
  totalPages = 1,
  onChangeCurrentPage,
}) => {
  const [currentPageText, setCurrentPageText] = useState<string>("");

  const handleChangePage = (value: number) => {
    onChangeCurrentPage(value);
  };

  const formatInput = ({ value, max }: IParams): string => {
    if (!value || !parseInt(value)) return "";
    if (parseInt(value) > max) return max.toString();
    const formatToNumber = parseInt(value);
    const formatToString = formatToNumber.toString();
    return formatToString;
  };

  const handleChangeInputPage = (e: React.FormEvent) => {
    const searchInputValue = (e.target as HTMLInputElement).value;
    const value = formatInput({
      value: searchInputValue,
      max: totalPages,
    });
    setCurrentPageText(value);
  };

  const handleGoToPage = () => {
    handleChangePage(parseInt(currentPageText));
    setCurrentPageText("");
  };

  const handleNextPage = () => {
    handleChangePage(++currentPage);
  };

  const handlePrevPage = () => {
    handleChangePage(--currentPage);
  };

  const isDisabledGoToPage = !currentPageText.length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleGoToPage();
  };

  return (
    <div
      className={tw`flex items-center justify-center p-6 space-x-6 flex-col sm:flex-row fixed bottom-0 left-0 w-full`}
      style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
    >
      <div className={tw`flex items-center space-x-4`}>
        <NavigationButton onClick={handlePrevPage} disabled={currentPage === 1}>
          <Icon name="chevron-left" className={tw`text-white`} size={35} />
        </NavigationButton>
        <div
          className={tw`bg-white text-green-400 font-black text-xxlg px-4 py-2 rounded-sm`}
        >
          {currentPage} - {totalPages}
        </div>

        <NavigationButton
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <Icon name="chevron-right" className={tw`text-white`} size={35} />
        </NavigationButton>
      </div>
      <form className={tw`flex items-center`} onSubmit={handleSubmit}>
        <label htmlFor="inputPage">
          <span className={tw`text-gray-400 mr-[1ch]`}>Go to page</span>
          <input
            type="text"
            value={currentPageText}
            onChange={(e) => handleChangeInputPage(e)}
            id="inputPage"
            name="inputPage"
            className={tw`appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-2 w-[40px] text-center`}
          />
        </label>
        <button
          type="submit"
          disabled={isDisabledGoToPage}
          className={tw`flex items-center`}
        >
          <span className={tw`mr-[1ch] ml-[1ch]`}>Go</span>
          <Icon name="chevron-right" className={tw`text-black`} />
        </button>
      </form>
    </div>
  );
};

export default Pagination;
