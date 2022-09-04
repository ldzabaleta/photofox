import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from './logo.svg'

const Header = () => {
  return (
    <div className='text-center'>
         <Link to='/'><img className='svg__size' src={logo} alt='Photofox'></img></Link>
    </div>
  )
}

export default Header
