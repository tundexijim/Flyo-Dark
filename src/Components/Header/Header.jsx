import React from 'react'
import {BiLayer} from 'react-icons/bi'
import './Header.css'

function Header() {
  return (
    <header>
      <a className='logo' href='#home'><BiLayer size={30}/><h1>Fylo</h1></a>
      <ul>
        <a href='#file'><li>Features</li></a>
        <a href='team'><li>Team</li></a>
        <a href='sign-in'><li>Sign In</li></a>
      </ul>
    </header>
  )
}

export default Header