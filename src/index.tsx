import React from "react";
import ReactDOM from "react-dom";
import App from "routes";
import reportWebVitals from "./reportWebVitals";
import "./styles/configBaseTailwind";
import GlobalStyles from "./styles/GlobalStyles";
import QueryProvider from "state/QueryProvider";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles>
      <QueryProvider>
        <App />
      </QueryProvider>
    </GlobalStyles>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
