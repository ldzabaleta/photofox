import React from 'react'
import './Header.css'
import logo from './logo.svg'

const Header = () => {
  return (
    <div className='text-center'>
         <a href= "./index.html">
            <img className='svg__size' src={logo} alt='Photofox'></img>
        </a>
    </div>
  )
}

export default Header
