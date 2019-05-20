import React, { useState, useEffect, useRef, Fragment } from 'react';

import Set from './set';

export default function SetContainer({ exerciseName, sets, reps, weight, i, date }) {
  const lsId = date + exerciseName + weight;
  const initialComplete = () => Boolean(localStorage.getItem(lsId) || false);
  const [complete, setCompleteState] = useState(initialComplete);
  const isInitialMount = useRef(true);

  const createSet = (sets, reps, date, exerciseName) => {
    let workoutSets = [];

    for (let i = 0; i < sets; i++) {
      workoutSets.push(
        <Set reps={ reps } key={ i } keyId={ date + exerciseName + i }/>
      )
    }

    return workoutSets;
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      localStorage.setItem(lsId, complete);
    }
  }, [complete]);

  const completeSet = () => {
    setCompleteState(true);
  }

  return (
    <div className="workoutDay__exercise">
      <div className="workoutDay__exercise-name" key={ exerciseName }>
        { exerciseName }
      </div>
      <div className="workoutDay__weight" key={ weight + i }>
        { `${sets} x ${reps} ${weight}kg`  }
      </div>
      { !complete
        ?
          <Fragment>
            <div className="workoutDay__set" key={ sets + i } >
              { createSet(sets, reps, date, exerciseName) }
            </div>
            <button
              className="workoutDay__complete"
              onClick={ () => completeSet() }
            >
              Finished
            </button>
          </Fragment>
        :
          <div className="workoutDay__set" key={ sets + i } >
            Complete
          </div>
      }
    </div>
  )
};
