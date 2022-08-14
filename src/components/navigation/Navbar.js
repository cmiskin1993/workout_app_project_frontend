import React from 'react';
import '../navigation/Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return(
    <div id='navbar'>
      <NavLink to="/"><img src={require('../assets/logo.png')} alt="logo" id='logo'/></NavLink>
        <ul>
          <li>
            <NavLink to="/workouts">Workouts</NavLink>
          </li>
          <li>
            <NavLink to="/exercises">Exercises</NavLink>
          </li>
          <li>
              <NavLink to="/workouts/new">Create My Workout</NavLink>
          </li>
          <li>
              <NavLink to="/exercises/new">Create My Exercise</NavLink>
          </li>
        </ul>
    </div>
  )
}

export default Navbar