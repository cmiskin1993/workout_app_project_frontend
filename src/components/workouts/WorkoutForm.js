import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../Globals';
import '../workouts/WorkoutForms.css';



const WorkoutForm = () => {

  const [ title, setTitle ] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate()

  const handleChange = e => {
    setTitle(e.target.value)
    setName(e.target.value)

  }

  const handleSubmit = async e => {
    e.preventDefault();
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const body = { 
      title: title
    }
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }
    await fetch(`${baseUrl}/workouts`, options)
    
    navigate("/workouts")
  }

  



  return (
    <div>
      <h2>Create My Workout</h2>
      <form id="form-container" onSubmit={ handleSubmit }>
        <div>
          <label> Workout: </label>
          <input type="text" name="workout" id="workout" value={ title } onChange={ handleChange } />
        </div>
        <input type="submit" value="Create Workout" />
      </form>
    </div>
  )
}

export default WorkoutForm