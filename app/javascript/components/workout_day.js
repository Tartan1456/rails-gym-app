import React from 'react';
import { Link } from 'react-router-dom'

import Header from './header';

const workoutDays = require('../../javascript/workoutDays.json');

class WorkoutDay extends React.Component {
  constructor(props) {
    super(props);

    this.workoutId = props.location.pathname.split('/')[2];

    this.workoutDay = workoutDays.find(x => x.id === this.workoutId);

    this.exercises = this.workoutDay.exercises;

    this.headerTitle = this.workoutDay.muscleSet;
  }

  createSet = (sets, reps) => {
    let workoutSets = [];

    for (let i = 0; i < sets; i++) {
      workoutSets.push(
        <div className="workoutDay__rep" key={ reps + i } />
      )
    }

    return workoutSets;
  };

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
            <div className="workoutDay__exercise" key={ i }>
              <div className="workoutDay__exercise-name" key={ exercise.exerciseName }>
                { exercise.exerciseName }
              </div>
              <div className="workoutDay__weight" key={ exercise.weight + i }>
                { `${exercise.sets} x ${exercise.reps} ${exercise.weight}kg`  }
              </div>
              <div className="workoutDay__set" key={ exercise.sets + i} >
                {this.createSet(exercise.sets, exercise.reps)}
              </div>
            </div>
          );
        })}
      </div>
    )
  }
};

export default WorkoutDay;
