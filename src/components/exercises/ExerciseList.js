import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../Globals';
import { ExerciseCard } from './ExerciseCard';


const ExerciseList = () => {

  const [ exercises, setExercises ] = useState([]);

  useEffect(() => {
    fetch(baseUrl + "/exercises")
    .then((resp) => resp.json())
    .then((data) => {;
      setExercises(data)
    });
  },[])

  const deleteExercise = exercise => {
    setExercises(exercises.filter(exercises => exercises.id !== exercise.id))
  }
   



  return (
    <div>
      {exercises.map((exercise, index) => (
  <ExerciseCard key={ index } exercise={ exercise } workout={ exercise.workout } deleteExercise={deleteExercise}  />
  ))}
    </div>
  )
}

export default ExerciseList