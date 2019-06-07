import React, { useState, useEffect, useRef, Fragment } from 'react';

import Set from './set';

export default function SetContainer({ name, sets, reps, weight, i, id, targetId, date }) {
  const lsId = id + name + date;
  const initialComplete = () => Boolean(localStorage.getItem(lsId) || false);
  const [complete, setCompleteState] = useState(initialComplete);
  const isInitialMount = useRef(true);

  const createSet = (sets, reps, date, name) => {
    let workoutSets = [];

    for (let i = 0; i < sets; i++) {
      workoutSets.push(
        <Set reps={ reps } key={ i } keyId={ date + name + i }/>
      )
    }

    return workoutSets;
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      //localStorage.setItem(lsId, complete);
      postToResults(id, complete);
    }
  }, [complete]);

  const completeSet = () => {
    setCompleteState(true);
  }

  const postToResults = (id) => {
    fetch('/api/results', {
      method: 'POST',
      mode: 'same-origin',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        complete,
        date: Date.now(),
        target_id: id,
      })
    })
    .then(response => response.json());
  }

  return (
    <div className="workoutDay__exercise">
      <div className="workoutDay__exercise-name" key={ name }>
        { name }
      </div>
      <div className="workoutDay__weight" key={ weight + i }>
        { `${sets} x ${reps} ${weight}kg`  }
      </div>
      { !complete
        ?
          <Fragment>
            <div className="workoutDay__set" key={ sets + i } >
              { createSet(sets, reps, date, name) }
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
