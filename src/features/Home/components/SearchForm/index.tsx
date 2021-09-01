import Select from "react-select";
import Button from "components/Button";
import { tw } from "twind";
import { useRef, useState } from "react";
import IFitlers from "features/types/filtersType";

interface ISelect {
  value: string;
  label: string;
}

interface IProps {
  isLoading: boolean;
  onChangeFilters: (filters: IFitlers) => void;
}

const optionsSelect = [
  { value: "alive", label: "alive" },
  { value: "dead ", label: "dead " },
  { value: "unknown", label: "unknown" },
];

const SearchForm: React.FC<IProps> = ({ onChangeFilters, isLoading }) => {
  const selectInputRef = useRef<any>(null);
  const [name, setName] = useState("");
  const [status, setStatus] = useState<null | "alive" | "dead" | "unknown">(
    null
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onChangeFilters({
      name,
      status,
    });
  };

  const handleChangeName = (value: string) => {
    setName(value);
  };

  const handleChangeSelect = (e: ISelect | null | undefined) => {
    setStatus(e?.value as null | "alive" | "dead" | "unknown");
  };

  const handleCleanForm = () => {
    const EMPTY_VALUES = { name: "", status: null };
    selectInputRef?.current.select.clearValue();
    setName(EMPTY_VALUES.name);
    onChangeFilters(EMPTY_VALUES);
  };

  const isDisabledButton = !(!!name.length || !!status?.length);

  return (
    <form onSubmit={handleSubmit} className={tw`mb-4`} data-testid="SearchForm">
      <div
        className={tw`grid gap-4 bg-white rounded-xl 
        transform transition duration-500 justify-center 
        grid-cols-[repeat(auto-fill,minmax(320px,1fr))] 
        sm:grid-cols-[repeat(auto-fill,minmax(420px,1fr))]`}
      >
        <input
          className={tw`flex bg-gray-100 px-4 py-2 space-x-4 rounded-lg group 
          bg-gray-100 outline-none w-full focus:ring-2 focus:ring-blue-600`}
          type="text"
          placeholder="Search by name"
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            handleChangeName(e.currentTarget.value)
          }
          data-testid="Input-name"
          value={name}
        />
        <div
          className="grid items-center gap-4"
          style={{ gridTemplateColumns: "1fr max-content" }}
        >
          <div
            className={tw`flex rounded-lg text-gray-500 font-semibold cursor-pointer`}
          >
            <Select
              ref={selectInputRef}
              options={optionsSelect}
              placeholder="Filter by status"
              isClearable={true}
              className={tw`w-full`}
              onChange={handleChangeSelect}
            />
          </div>
          <div className={tw`grid gap-2 grid-flow-col`}>
            <div className={tw`flex items-center`}>
              <Button
                isLoading={isLoading}
                iconName="search"
                type="submit"
                disabled={isDisabledButton}
              />
            </div>
            <div className={tw`flex items-center`}>
              <Button
                isLoading={isLoading}
                iconName="clear"
                onClick={handleCleanForm}
                disabled={isDisabledButton}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
