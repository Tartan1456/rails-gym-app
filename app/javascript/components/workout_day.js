import React from 'react';
import { Link } from 'react-router-dom'

import Header from './header';
import SetsContainer from './sets_container';

const workoutDays = require('../../javascript/workoutDays.json');

class WorkoutDay extends React.Component {
  constructor(props) {
    super(props);

    this.workoutId = props.location.pathname.split('/')[2];

    this.workoutDay = workoutDays.find(x => x.id === this.workoutId);

    this.exercises = this.workoutDay.exercises;

    this.date = this.workoutDay.date;

    this.headerTitle = this.workoutDay.muscleSet;
  }

  render() {
    return (
      <div>
        <Link to={ '/' }>
          <Header
            title={ this.headerTitle }
          />
        </Link>
        {this.exercises.map((exercise, i) => {
          return (
            <SetsContainer
              { ...exercise }
              date={ this.date }
              key={ i }
              i = { i }
            />
          );
        })}
      </div>
    )
  }
};

export default WorkoutDay;
