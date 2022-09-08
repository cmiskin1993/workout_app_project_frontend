import React from 'react'
import { NavLink } from 'react-router-dom'
import { baseUrl } from '../../Globals'
import "../workouts/WorkoutCards.css"


const WorkoutCards = ({ workout, deleteWorkout }) => {



  const handleDelete = () => {
    fetch(baseUrl + '/workouts/' + workout.id, {
      method: "DELETE",
    })
      .then(resp => resp.json())
      .then(data => {
        deleteWorkout(data)
      })
  }

  return ( 
    <div>
        <div className='grid-container'>
              <li className="card">
              <NavLink id='workout-link' to={`/workouts/${workout.id}`}>{ workout.title }</NavLink> <br/> <button onClick={handleDelete} >Delete</button>
              </li>
        </div>
    </div>
    
    
  )
}

export default WorkoutCards