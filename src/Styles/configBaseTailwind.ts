import { setup } from "twind";

const Setup = setup({
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      fontSize: {
        xsm: "8px",
        sm: "10px",
        md: "12px",
        lg: "14px",
        xlg: "24px",
      },
      lineHeight: {
        xsm: "12px",
        sm: "16px",
        md: "16px",
        lg: "16px",
        xlg: "32px",
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
