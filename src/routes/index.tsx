import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "routes/routing";
import Home from "features/Home";
import PageNotFound from "components/PageNotFound";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.home.base} component={Home} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
