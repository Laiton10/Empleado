import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import img1 from '../Resources/disney-seeklogo.png';
import img2 from '../Resources/amazon-prime-video-seeklogo.png';
import img3 from '../Resources/hbo-max-seeklogo.png';
import img4 from '../Resources/netlfix.png';
import img5 from '../Resources/FilMe-removebg-preview.png';
import "../estilos/Galeria.css";

function Galeria() {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="container">    
      <div id="carrusel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Mapeo las imágenes para hacer el carrusel más dinámico */}
          {images.map((image, index) => ( 
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}> 
              <img src={image} className="d-block w-100" alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carrusel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carrusel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      <div id="texto" className="container d-flex flex-column">
        <h2>Servicios de Streaming</h2>
        <div id="texto2" className="container d-flex flex-column"> 
            <p>¡Descubre en qué servicios de streaming encontrar las películas que quieras ver!</p>
            <p>Aquí te presentamos algunas de las plataformas más populares que ofrecemos para que encuentres en cuál ver esa película que tanto quieres.</p>
            <p>¡Explora ahora y mantente al día con las mejores series, películas y mucho más!</p>
        </div>
      </div>
    </div>
  );
}

export default Galeria;
