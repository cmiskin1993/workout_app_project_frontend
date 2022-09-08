import React, {useEffect, useState} from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { baseUrl } from '../../Globals';
import ExerciseCard from '../exercises/ExerciseCard';
import "../workouts/WorkoutCards.css"





const WorkoutInfo = () => {
  const [ workout, setWorkout] = useState(null);
  const [ loading, setLoading] = useState(true);
  const { id } = useParams();


  useEffect(() => {
    const loadWorkout = async () => {
      const resp = await fetch(`${ baseUrl }/workouts/${id}`)
      const data = await resp.json();

      setWorkout(data);
      setLoading(false);
    }
    loadWorkout();
  }, [id])

  if(loading) {
    return <h1>Your Workout will be here shortly...</h1>
  } else {


    const exerciseCards = workout.exercises.map((exercise, index) => <ExerciseCard key={ index } exercise={ exercise } workout={ workout }  />)


    return (
      <div>
        <h2>{ workout.title }</h2>
        <button><NavLink id='edit' to={`/workouts/${ workout.id }/edit`}>Edit Workout</NavLink></button>
        <button><NavLink id='edit' to={`/workouts/${ workout.id }/exercises/new`}>Create Exercise</NavLink></button>
        { exerciseCards }
      </div>
    )
  }

}

export default WorkoutInfo