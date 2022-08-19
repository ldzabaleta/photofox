import React from 'react'
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light p-3'>
        <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id="navbarSupportedContent">
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 list'>
                <li className='nav-item'>
                    <a className='nav-link active link' aria-current="page" href="index.html">Inicio</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link link' href="./como-comprar.html">Cómo comprar</a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link link' href="./faq.html">F.A.Q</a>
                </li>    
                <li className='nav-item'>
                    <a className='nav-link link' href="./contacto.html">Contacto</a>
                </li>
            </ul>

        </div>
    </nav>
  )
}

export default NavBar