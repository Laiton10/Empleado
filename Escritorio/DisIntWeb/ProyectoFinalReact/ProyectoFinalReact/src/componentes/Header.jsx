import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Resources/FilMe-removebg-preview.png';

function Header({ user, links }) {
  return (
    <header>
      <nav className="nav">
        <div>
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <ul className="navLinks">
          <li><Link to="/">{links.inicio}</Link></li>
          <li><Link to="/galeria">{links.servicios}</Link></li>
          <li><Link to="/populares">{links.populares}</Link></li>
          <li><a href="#miLista">{links.miLista}</a></li>
          <li><a href="#buscar">{links.buscar}</a></li>
        </ul>
        <div className="inicioSesion">
          {user ? <p className='saludoUsuario'>¡Hola, {user}!</p> : <Link to="/login">Iniciar Sesión</Link>}
        </div>
      </nav>
    </header>
  );
}

export default Header;
