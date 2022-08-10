import React, { useState } from 'react'
import { baseUrl, headers } from '../../Globals';
import '../workouts/Forms.css'
import { useNavigate } from 'react-router-dom';



const WorkoutForm = ({ addWorkout }) => {

  const [addExercise, setAddExercise] = useState( [""]);

  
const [workout, setWorkout] = useState("Workout");
const [notes, setNotes] = useState("Notes");
const [exercise, setExercise] = useState("Exercise");
const [amount, setAmount] = useState("Amount");

const navigate = useNavigate()


const handleSubmit = e => {
  e.preventDefault();
}

const handleClick = () => {;
  setAddExercise([...addExercise, "" ]);
}

const handleAddExercise = (e, index) => {
const { name, value} = e.target;
const list = [...addExercise];
list[index][name] = value;
setAddExercise(list);
}

const params = {
    workout: {
      name: workout,
      notes: notes
    },
    workout_exercises: {
      amount: amount,
      name: exercise
    }
  }
fetch (baseUrl + "/workouts", {
  method: 'POST',
  headers,
  body: JSON.stringify(params)
  })
  .then(resp => resp.json())
  .then(data => {
    addWorkout(data);
    navigate("/my-workouts")
  })


  return (
    <div>
        <h2> Create My Workout</h2>
        <form  id="form-container" onSubmit={ handleSubmit } >
                <div> 
                <label>Workout:</label>
                    <input type="string" name='workout' id="workout" value={ workout } onChange={ e => setWorkout(e.target.value) } />
                  </div>

                  <label>Exercise:</label>
                <div>
                  <input type="string" name='exercise' id="exercise" value={ exercise } onChange={ e => setExercise(e.target.value) }  />
                      <input type="string" name='amount' id="amount" value={ amount } onChange={ e => setAmount(e.target.value) }  />

                  <input type="string" name='exercise' id="exercise" value={ exercise } onChange={ e => setExercise(e.target.value) } />
                      <input type="string" name='amount' id="amount" value={ amount } onChange={ e => setAmount(e.target.value) }  />
                </div>
                  {
                    addExercise.map( (x,i) => {
                      return(
                  <div> 
                    <input type="string" name='exercise' id="exercise" value={ exercise } onChange={ e => handleAddExercise(e,i) } />
                        <input type="string" name='amount' id="amount" value={ amount } onChange={ e => setAmount(e.target.value) }  />
                  </div>
                      );
                  })}
                  <button className='addButton' onClick={ handleClick } > Add Exercise</button>

                  <div> 
                    <label> How I'm feeling today:</label>
                    <textarea name="notes" id="notes"  cols="10" rows="10" value={ notes } onChange={ e => setNotes(e.target.value) } />
                  </div>
                  <input type="submit" value="Create Workout"/>
                </form>

    </div>
  )
}

export default WorkoutForm