import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../Globals';
import WorkoutCards from './WorkoutCards';

const WorkoutList = () => {

    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
    fetch(baseUrl + "/workouts")
    .then((resp) => resp.json())
    .then((workoutsArray) => {;
      setWorkouts(workoutsArray)
    });
  },[])

  const deleteWorkout = workout => {
    setWorkouts(workouts.filter(workouts => workouts.id !== workout.id))
  }


  return (
    <div>
        {workouts.map((workout) => (
                <WorkoutCards key={workout.id} workout={workout} deleteWorkout={deleteWorkout} />
                ))}
    </div>
  )
}

export default WorkoutList