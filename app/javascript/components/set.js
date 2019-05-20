import React, { useState, useEffect } from 'react';

export default function Set({ reps, keyId = null }) {
  const initialRep = () => Number(localStorage.getItem(keyId) || reps);
  const [rep, setRep] = useState(initialRep);
  const handleRepClick = () => {
    if (rep > 0) {
      setRep(rep - 1)
    }
  }

  useEffect(() => {
    localStorage.setItem(keyId, rep)
  }, [rep]);

  return (
    <button
      className="workoutDay__rep"
      onClick={ () => handleRepClick() }
    >
      { rep }
    </button>
  )
}
