import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoanDetails from '../pages/LoanDetails';
import Dashboard from '../pages/Dashboard';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={LoanDetails} />
    <Route path="/dashboard" exact component={Dashboard} />
  </Switch>
);

export default Routes;