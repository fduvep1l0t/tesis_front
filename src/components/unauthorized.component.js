import React from 'react';
import { Link } from 'react-router-dom';
//import '../Unauthorized.scss';

const Unauthorized = () => {
  return (
    <div>
        <h1> Contenido no autorizado</h1>
        <p><Link to='/'>Volver al inicio</Link></p>
    </div>
  )
}

export default Unauthorized;