import React from 'react'
import './Home.css'
import intro from '../../assets/illustration-intro.png'
function Home() {
  return (
    <section id='home'>
      <div className="home__container">
      <img src={intro} alt=''/>
      <h1> All your files in one secure location, accessible anywhere.</h1>
      <p> Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
      <button className='btn'>Get Started</button>
      </div>
    </section>
  )
}

export default Home