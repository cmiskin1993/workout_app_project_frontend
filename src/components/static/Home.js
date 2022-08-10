import React from 'react'
import '../static/Home.css'
import HomeImage from '../assets/weights-exercise-weightlifter-strong-athletic.jpg'

const Home = () => {

  return (
    <div>
      <div className="overlay"></div>
          <h1> Work Hard or Go Home </h1>
           <img src={HomeImage} alt={HomeImage} />

    </div>
  )
}

export default Home