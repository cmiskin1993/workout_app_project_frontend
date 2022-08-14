import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./components/static/Home";
import Navbar from "./components/navigation/Navbar";
import WorkoutForm from './components/workouts/WorkoutForm';
import ExerciseForm from './components/exercises/ExerciseForm';
import WorkoutList from './components/workouts/WorkoutList';
import ExerciseList from './components/exercises/ExerciseList';
import PageNotFound from './components/static/PageNotFound';


function App() {


  return (

    <Router>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/workouts" element={ <WorkoutList /> } />
        <Route path="/workouts/new" element={ <WorkoutForm  /> } />
        <Route path="/exercises" element={ <ExerciseList /> } />
        <Route path="/exercises/new" element={ <ExerciseForm  /> } />

        <Route component={ PageNotFound } />


      </Routes>
    </Router>

  );
}

export default App;
