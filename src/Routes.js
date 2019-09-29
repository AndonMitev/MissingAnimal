import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';

export default (
  <Switch>
    <Route path="/login" component={LoginPage} />
    <Route path="/register" component={RegisterPage} />
  </Switch>
);