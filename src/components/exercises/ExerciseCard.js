
import React from 'react'
import { NavLink } from 'react-router-dom'
import { baseUrl } from '../../Globals'

export const ExerciseCard = ({ exercise, deleteExercise }) => {

  const handleDelete = () => {
    fetch(baseUrl + '/exercises/' + exercise.id, {
      method: "DELETE",
    })
      .then(resp => resp.json())
      .then(data => {
        deleteExercise(data)
      })
  }


  return (
    <div className='grid-container'>
        <li className="card">
        <NavLink to={`/exercise/${exercise.id}`}> { exercise.name } <br/> {exercise.amount} <br/> <button onClick={handleDelete} >Delete </button> </NavLink>   
        </li>
    </div>
  )
}

export default ExerciseCard