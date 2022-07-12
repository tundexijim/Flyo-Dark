import React from 'react'
import './Footer.css'
import {BiLayer} from 'react-icons/bi'
import {TbPhoneCall} from 'react-icons/tb'
import {MdLocationOn} from 'react-icons/md'
import {SiGmail} from 'react-icons/si'
import {BsInstagram} from 'react-icons/bs'
import {RiFacebookCircleLine} from 'react-icons/ri'
import {AiFillTwitterCircle} from 'react-icons/ai'
function Footer() {
  return (
    <section id='Sign-in'>
      <div className="sign-in">
      <h1>Get early access today</h1>
      <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
      <form>
        <input type='text' value='johnappleseed#mail.com'/>
        <button className='btn'>Get Started For Free</button>
      </form>
      </div>
      <div className="footer__container">
      <a className='logo' href='#home'><BiLayer size={30}/><h1>Fylo</h1></a>
      <div className='footer'>
      <div className="location">
        <MdLocationOn size={50}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      </div>
      <div className="contacts">
        <a className='contact' href=''><TbPhoneCall /><p>+1-543-123-4567</p></a>
        <a className='contact' href=''><SiGmail /><p>example@fylo.com </p></a>
      </div>
      <ul>
        <a href=''><li>About Us</li></a>
        <a href=''><li>Jobs</li></a>
        <a href=''><li>Press</li></a>
        <a href=''><li>Blog</li></a>
      </ul>
      <ul>
        <a href=''><li><b>Contact Us</b></li></a>
        <a href=''><li>Terms</li></a>
        <a href=''><li>Privacy</li></a>
      </ul>
      <div className="socials">
        <a href=''><RiFacebookCircleLine /></a>
        <a href=''><AiFillTwitterCircle /></a>
        <a href=''><BsInstagram /></a>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Footer