import React from 'react'
import "../workouts/WorkoutCards.css"

const WorkoutCards = ({ workout, deleteCard }) => {

  console.log(workout.workout_exercises)

  const handleDelete = () => {
    deleteCard(workout)
  }

  return (
    <div className='grid-container'>
          <li className="card">
                <h3>{workout.name} Workout </h3>
                <p>How I'm feeling today: <br /> {workout.notes} </p>
                <p> Exercises</p> 
                  <ul>
                    <li>
                      <p>{}</p>
                    </li>
                  </ul>
                  <button onClick={handleDelete}>Delete</button>


          </li>
    </div>
  )
}

export default WorkoutCards