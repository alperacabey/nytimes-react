import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import ArticleList from "./pages/ArticleList"
import ArticleDetail from "./pages/ArticleDetail"

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/search" component={ArticleList} />
        <Route exact={true} path="/article" component={ArticleDetail} />
        {/* Not Found */}
        <Route component={() => <Redirect to="/search" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
