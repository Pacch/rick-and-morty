import { tw } from "twind";
import iconPaths from "./selection.json";

interface IProps {
  name: string;
  size?: number;
  width?: number;
  height?: number;
  className?: string;
}

const Icon: React.FC<IProps> = ({
  name,
  size = 15,
  className = "",
  width,
  height,
}) => {
  const getPath = (iconName: string): string => {
    const icon = (iconPaths as any).icons.find(
      (icon: any) => icon.properties.name === iconName
    );

    if (icon) {
      return icon.icon.paths.join(" ");
    } else {
      return "";
    }
  };

  if (!getPath(name)) return null;

  return (
    <svg
      data-testid="Icon"
      className={tw`fill-current ${className}`}
      width={width ? width : size}
      height={height ? height : size}
      viewBox={"0 0 1024 1024"}
    >
      <path d={getPath(name)} />
    </svg>
  );
};

export default Icon;
