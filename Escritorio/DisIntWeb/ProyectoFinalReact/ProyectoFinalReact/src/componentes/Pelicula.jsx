import React from 'react';
import { useParams } from 'react-router-dom';
import peliculasData from '../data/peliculas.json';
import '../estilos/Pelicula.css';

function Pelicula() {

  const { id } = useParams(); //cogemos el id de la URL, es un hook que obtiene parámetros de la URL actual
  const pelicula = peliculasData.find((p) => p.id.toString() === id); /*buscamos con .find si el id de la URL, el de la pelicula seleccionada, 
  coincide con alguno de los id's que recorremos de peliculasData, si lo encuentra, guarda esa pelicula en la const pelicula*/


  /* y aqui ya ponemos toda su info*/
  
  return (
    <div className="pelicula">

        <div className='tituloPeli'>
            <h1>{pelicula.titulo}</h1>
            <img src={`/${pelicula.imagen}`} alt={pelicula.titulo} />
         </div>
     
        <div className='infoPeli'>
            <p><strong><span>❑</span>Sinopsis:</strong> {pelicula.sinopsis}</p>
            <p><strong><span>❑</span>Director:</strong> {pelicula.director}</p>
            <p><strong><span>❑</span>Duración:</strong> {pelicula.duracion}</p>
            <p><strong><span>❑</span>Puntuación:</strong> {pelicula.puntuacion}</p>
            <p><strong><span>❑</span>Críticas:</strong> {pelicula.criticas}</p>
            <p><strong><span>❑</span>Reparto:</strong> {pelicula.reparto.join(', ')}</p>
            <p><strong><span>❑</span>Disponible en:</strong> {pelicula.streaming.join(', ')}</p>
        </div>
     
    </div>
  );
}

export default Pelicula;
