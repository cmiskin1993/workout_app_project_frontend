import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { baseUrl } from '../../Globals';
import '../workouts/WorkoutForms.css'
import "../workouts/WorkoutCards.css"



const EditWorkout = () => {
  const [ title, setTitle ] = useState("");
  const [ workout, setWorkout ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const { id } = useParams();
  const naviagte = useNavigate();


  useEffect(() => {
    const loadWorkout = async () => {
      const resp = await fetch(`${baseUrl}/workouts/${id}`)
      const data = await resp.json();
      setWorkout(data);
      setTitle(data.title);
      setLoading(false);
    }
    loadWorkout();
  }, [id])

  const handleChange = e => {
    setTitle(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const body = { title: title }
    const options = {
      method: "PATCH",
      headers,
      body: JSON.stringify(body)
    }
    await fetch(`${baseUrl}/workouts/${id}`, options)
    
    naviagte(`/workouts/${id}`);
  }

  if(loading){ return <h1>One step closer to your goals...</h1>};


  return (
    <div>
      <h2>Edit { workout.title }</h2>
      <form id="form-container" onSubmit={ handleSubmit }>
        <div>
          <input type="text" name="workout" value={ title } onChange={ handleChange }  />
        </div>
        <input type="submit" value="Update Workout" />
      </form>
    </div>
  )
}

export default EditWorkout