import React from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';

//Components
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light p-3'>
        <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse d-flex' id="navbarSupportedContent">

            <ul className='navbar-nav me-auto mb-2 mb-lg-0 list'>
            <Link to='/' className='nav-item nav-link link'>Inicio</Link>
                <Link to='/como-comprar' className='nav-item nav-link link'>Cómo comprar</Link>
                <Link to='/faq' className='nav-item nav-link link'>FAQ</Link> 
                <Link to='/contact' className='nav-item nav-link link'>Contacto</Link>
            </ul>
            <div className='px-2'>
                <a href="./contacto.html">
                    <CartWidget />
                </a>
            </div>
        </div>
    </nav>
  )
}

export default NavBar