import React from "react";
import ReactDOM from "react-dom";
import App from "routes";
import reportWebVitals from "./reportWebVitals";
import "./Styles/configBaseTailwind";
import GlobalStyles from "./Styles/GlobalStyles";
import QueryProvider from "State/QueryProvider";

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
