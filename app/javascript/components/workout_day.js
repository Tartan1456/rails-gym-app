import React from 'react';
import { Link } from 'react-router-dom'

import Header from './header';

const workoutDays = require('../../javascript/workoutDays.json');

console.log(workoutDays.find(i => i.id === "0").exercises);

const workoutDayId = location.hash.split("/")[2];

const headerTitle = workoutDays.find(x => x.id === workoutDayId).muscleSet;


class WorkoutDay extends React.Component {
  componentWillReceiveProps() {
    const workoutDays = require('../../javascript/workoutDays.json');

    console.log(workoutDays.find(i => i.id === "0").exercises);

    const workoutDayId = location.hash.split("/")[2];

    const headerTitle = workoutDays.find(x => x.id === workoutDayId).muscleSet;
  };

  render() {
    return (
      <div>
        <Link to={ '/' }>
          <Header
            title={ headerTitle }
          />
        </Link>
        <div className="workoutDay__exercise">
          <div className="workoutDay__exercise-name">
            Squat
          </div>
          <div className="workoutDay__weight">
            5x5
            35kg
          </div>
          <div className="workoutDay__set">
            <div className="workoutDay__rep">
              5
            </div>
            <div className="workoutDay__rep">
              5
            </div>
            <div className="workoutDay__rep">
              5
            </div>
            <div className="workoutDay__rep">
              5
            </div>
            <div className="workoutDay__rep">
              5
            </div>
          </div>
        </div>
        <div className="workoutDay__exercise">
          <div className="workoutDay__exercise-name">
            Leg Extension
          </div>
          <div className="workoutDay__weight">
            4x12
            20kg
          </div>
          <div className="workoutDay__set">
            <div className="workoutDay__rep">
              12
            </div>
            <div className="workoutDay__rep">
              12
            </div>
            <div className="workoutDay__rep">
              12
            </div>
            <div className="workoutDay__rep">
              12
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default WorkoutDay;
