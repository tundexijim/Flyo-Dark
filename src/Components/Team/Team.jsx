import React from 'react'
import './Team.css'
import profile1 from '../../assets/profile-1.jpg'
import profile2 from '../../assets/profile-2.jpg'
import profile3 from '../../assets/profile-3.jpg'
import bg from '../../assets/bg-quotes.png'

function Team() {
  return (
    <section>
         <img src={bg} className="image" alt='' />
      <div className="team__container">
        <div className="comment">
          <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
          <div className="profile">
            <img src={profile1} alt=''/>
            <div className="name">
              <h3>Satish Patel</h3>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
        <div className="comment">
          <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
          <div className="profile">
            <img src={profile2} alt=''/>
            <div className="name">
              <h3>Bruce McKenzie</h3>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
        <div className="comment">
          <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
          <div className="profile">
            <img src={profile3} alt=''/>
            <div className="name">
              <h3>Iva Boyd</h3>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team