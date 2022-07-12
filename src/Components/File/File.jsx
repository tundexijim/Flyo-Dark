import React from 'react'
import './File.css'
import img1 from '../../assets/icon-access-anywhere.svg'
import img2 from '../../assets/icon-security.svg'
import img3 from '../../assets/icon-collaboration.svg'
import img4 from '../../assets/icon-any-file.svg'
function File() {
  return (
    <section id='file'>
    <div className="file__container">
    <div className="above">
        <div className="abv1">
          <img src={img1} alt=''/>
          <h2>Access your files, anywhere</h2>
          <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
        </div>
        <div className="abv2">
          <img src={img2} alt=''/>
          <h2>Security you can trust</h2>
          <p> 2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
        </div>
    </div>
    <div className="below">
        <div className="bel1">
          <img src={img3} alt=''/>
          <h2>Real-time collaboration</h2>
          <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
        </div>
        <div className="bel2">
          <img src={img4} alt=''/>
          <h2>Store any type of file </h2>
          <p> Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
        </div>
    </div>
    </div>
    </section>
  )
}

export default File