import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import peliculasData from '../data/peliculas.json';
import '../estilos/Populares.css';

function Populares() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    setPeliculas(peliculasData); //se ejecuta solo una vez al montarse el componente populares, cargando las peliculas en las const peliculas
  }, []);

  return (
    <div className="contenedor">
      <h1 className="titulo">
        <span>❑</span> Las 10 películas y series más populares de esta semana en España.
      </h1>
      <div className="caratulas">
        {peliculas.map((pelicula) => (
          <div className="peliculas" key={pelicula.id}>
            <h2>{`${pelicula.id}. ${pelicula.titulo}`}</h2>
            <Link to={`/pelicula/${pelicula.id}`}>
              <img src={`/${pelicula.imagen}`} alt={pelicula.titulo} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Populares;
