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
   



  return (
    <div>
      {exercises.map((exercise, index) => (
  <ExerciseCard key={ index } exercise={ exercise } workout={ exercise.workout }  />
  ))}
    </div>
  )
}

export default ExerciseList