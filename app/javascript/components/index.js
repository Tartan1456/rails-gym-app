import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

import Home from '../components/home';
import WorkoutDay from '../components/workout_day';
import Form from '../components/form';

const Index = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/workout/:id/edit" component={Form} />
      <Route path="/workout/:id" component={WorkoutDay} />
    </Switch>
  </Router>
);

export default Index;
