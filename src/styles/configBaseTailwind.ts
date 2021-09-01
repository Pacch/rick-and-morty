import { setup, silent } from "twind";

const Setup = setup({
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  preflight: {
    "@import": `url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap')`,
  },
  mode: silent,
});

export default Setup;
