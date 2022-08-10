import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/static/Home";
import Navbar from "./components/navigation/Navbar";
import WorkoutForm from './components/workouts/WorkoutForm';
import WorkoutList from './components/workouts/WorkoutList';
import { useEffect, useState } from 'react';
import {baseUrl} from './Globals';

function App() {

  const [workouts, setWorkouts] = useState([])

  useEffect (() => {
    fetch(baseUrl + '/workouts')
    .then(resp => resp.json())
    .then(data => setWorkouts(data))
  }, []) 

  const addWorkout = workout => {
    setWorkouts([...workouts, workout]);

  }

  
  return (

    <Router>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/my-workouts" element={ <WorkoutList workouts ={ workouts } /> } />
        <Route path="/workouts/new" element={ <WorkoutForm  addWorkout={ addWorkout } /> } />


      </Routes>
    </Router>

  );
}

export default App;
