import React from 'react'

function Principal() {
  return (
     <div>
      <div className="contenido">
        <p className='info'>Descubre y encuentra las peliculas <br></br> que buscas al momento.</p>
      </div>
      <div className="suscripcion">
        <div className='registrar'>
          <input type="email" placeholder="Introduce tu nombre y tus apellidos" className="inputCorreo" />
          <button className="botonSuscribir">REGÍSTRATE YA</button>
        </div>
        <p className='texto'>¿Deseas ver en qué servicio de streaming está disponible la película que buscas? <br></br> 
        ¿O compartir con tus amigos tus películas favoritas? Con FilMe, ¡podrás disfrutar de esto y mucho más!
        </p>
      </div>
    </div>
  )
}

export default Principal