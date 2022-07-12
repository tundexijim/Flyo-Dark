import React from 'react'
import product from '../../assets/illustration-stay-productive.png'
import './About.css'

function About() {
  return (
   <section>
     <div className='about__container'>
     <img src={product} alt='' />
     <div className='text'>
       <h1>Stay productive, wherever you are</h1>
       <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
       <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
       <a href=''>See how Fylo works</a>
     </div>
     </div>
   </section>
  )
}

export default About