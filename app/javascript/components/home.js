import React from 'react';

import Header from '../components/header';
import WorkoutContainer from '../components/workouts';

const Home = () => (
  <div>
    <Header
      title='Workouts'
    />
    <WorkoutContainer />
  </div>
);

export default Home;
