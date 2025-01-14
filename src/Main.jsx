import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage/homepage';
import NgoHome from './pages/NGO/ngoHome';

function Main() {
  return (
    <Router>
      <Link to="/" />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/ngo/home" component={NgoHome} />
      </Switch>
    </Router>
  );
}

export default Main;
