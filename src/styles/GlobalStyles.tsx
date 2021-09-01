import { css, tw } from "twind/css";

const globalStyles = css({
  ":global": {
    "*": {
      outline: "none",
      border: "none",
      "&::before": {
        outline: "none",
        border: 0,
      },
      "&::after": {
        outline: "none",
        border: 0,
      },
    },
  },
});

const GlobalStyles: React.FC = ({ children }) => {
  return <div className={tw(globalStyles)}>{children}</div>;
};

export default GlobalStyles;
