import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';

import Home from '../components/home';
import WorkoutDay from '../components/workout_day';
import Exercise from '../components/exercise';


const Index = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/workout/:id" component={WorkoutDay} />
      <Route path="/exercise" component={Exercise} />
    </Switch>
  </Router>
);

export default Index;
