import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route'
import LoanDetails from '../pages/LoanDetails';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/loan" component={LoanDetails} isPrivate />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;