import React from 'react'
import { NavLink } from 'react-router-dom'

export const ExerciseCard = ({ exercise, workout }) => {


  return (
    <div className='grid-container'>
    <li className="card">
    <NavLink to={`/workouts/${workout.id}`}>{ workout.title } </NavLink> 
    <h3>{exercise.amount} {exercise.name}  </h3>
    
    </li>
</div>
  )
}

export default ExerciseCard
