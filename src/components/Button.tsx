import { tw } from "twind";
import Icon from "components/Icon";

interface IProps {
  isLoading?: boolean;
  iconName?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<IProps> = ({
  isLoading,
  iconName,
  type = "button",
  onClick = () => {},
  disabled,
  children,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (disabled) e.preventDefault();
    onClick();
  };
  return (
    <button
      className={tw`bg-green-400 py-3 px-5 text-white font-semibold rounded-lg transition cursor-pointer flex items-center disabled:opacity-50 disabled:cursor-not-allowed`}
      type={type}
      onClick={handleClick}
      disabled={disabled}
    >
      {isLoading && (
        <div
          style={{ borderTopColor: "transparent" }}
          className={tw`w-4 h-4 border-4 border-white border-solid rounded-full animate-spin`}
        ></div>
      )}
      {!isLoading && iconName && <Icon name={iconName} size={20} />}
      {children}
    </button>
  );
};

export default Button;
