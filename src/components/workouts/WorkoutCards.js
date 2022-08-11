import React from 'react'
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
    <div className='grid-container'>
          <li className="card">
                <h3> {workout.name} Workout </h3>
                <p>How I'm feeling today: <br /> {workout.notes} </p>

                  <button onClick={handleDelete} >Delete</button>


          </li>
    </div>
  )
}

export default WorkoutCards