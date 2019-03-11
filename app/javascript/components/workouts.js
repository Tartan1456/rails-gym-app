import React from 'react';
import { Link } from 'react-router-dom'

import Workout from '../components/workout';
import Exercise from '../components/exercise';

const workoutDays = require('../../javascript/workoutDays.json');

const WorkoutContainer = () => {
  return (
    <div className='workouts-wrapper'>
      {workoutDays.map((workoutDay, i) => {
        const workoutLink = 'workout/' + workoutDay.id;

        return (
          <Link key={ i } to={ workoutLink }>
            <Workout
              key={ i }
              { ...workoutDay }
            >
              {workoutDay.exercises.map((exercise, i) => {
                return (
                  <Exercise
                    key={ i }
                    { ...exercise }
                  />
                );
              })}
            </Workout>
          </Link>
        )
      })}
    </div>
  )
};

export default WorkoutContainer;
