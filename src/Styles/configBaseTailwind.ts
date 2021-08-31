import { setup } from "twind";

const Setup = setup({
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    boxShadow: {
      card: "0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)",
    },
    extend: {
      colors: {
        dead: "#000000cc",
        alive: "#000000cc",
        unknown: "#000000cc",
      },
      fontSize: {
        xsm: "8px",
        sm: "10px",
        md: "12px",
        lg: "14px",
        xlg: "20px",
        xxlg: "24px",
      },
      lineHeight: {
        xsm: "8px",
        sm: "10px",
        md: "12px",
        lg: "14px",
        xlg: "20px",
        xxlg: "20px",
      },
      spacing: {
        none: "0",
        xsm: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xlg: "20px",
        xxlg: "24px",
      },
      borderRadius: {
        none: "0",
        xsm: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xlg: "20px",
        xxlg: "24px",
      },
    },
  },
  preflight: {
    "@import": `url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap')`,
  },
});

export default Setup;
