import React from 'react';

import Header from './header';

let workoutDays = require('../../javascript/workoutDays.json');

const WorkoutDay = () => {
  return (
    <div>
      <Header
        title="Leg &amp; Shoulders"
      />
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
};

export default WorkoutDay;
