import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

function Nav() {
  return (
    <div className='navbar'>
        <NavLink to ='/'> Home </NavLink>
        <NavLink to ='/cart'> cart </NavLink>
        <NavLink to ='/login'> Login </NavLink>
    </div>
  )
}

export default Nav