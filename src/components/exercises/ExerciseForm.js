import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../Globals';

const ExerciseForm = () => {

  const [workout, setWorkout] = useState(null);
  const [state, setState] = useState({
    name: "",
    amount: ""
  })
  const [loading, setLoading] = useState(true);
  const { workoutId } = useParams();
  const naviagte = useNavigate();

  useEffect(() => {
    const loadWorkout = async () => {
      const resp = await fetch(`${baseUrl}/workouts/${workoutId}`)
      const data = await resp.json();
      setWorkout(data);
      setLoading(false);
    }
    loadWorkout();
  }, [workoutId])

  if(loading){ return <h1>Your workout is loading...</h1>};

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(state)
    }    
    await fetch(`${baseUrl}/workouts/${ workoutId }/exercises`, options)

    naviagte(`/workouts/${ workoutId }`);
  }

  return (
    <div>
      <form  id="form-container" onSubmit={ handleSubmit }>
      <h2>Create Exercise {workout} </h2>
        <div>
          <label> Exercise: </label>
          <input type="text" name="exercise" value={ state.name } onChange={ handleChange } />
        </div>
 
        <div>
          <label> Amount: </label>
          <input type="text" name="amount" value={ state.amount } onChange={ handleChange } />
        </div>

        <input type="submit" value="Create Exercise" />
      </form>
    </div>
  )
}

export default ExerciseForm