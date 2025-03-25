import './App.css';
import './estilos/Login.css';
import Header from './componentes/Header';
import Principal from './componentes/Principal';
import Footer from './componentes/Footer';
import Login from './componentes/Login';
import Galeria from './componentes/Galeria';
import Populares from './componentes/Populares';
import Pelicula from './componentes/Pelicula';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const links = {
    inicio: "Inicio",
    servicios: "Servicios Streaming",
    populares: "Populares",
    miLista: "Mi Lista",
    buscar: "Buscar"
  };

  const [user, setUser] = useState(null); // Estado para almacenar el usuario

  const handleLogin = (nickname) => {
    setUser(nickname); // Guarda el nickname cuando inicia sesión
  };

  return (
    <Router>
      <div className="contenedor">
        <Header user={user} links={links} />
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} /> 
          <Route path="/galeria" element={<Galeria/>} />
          <Route path="/populares" element={<Populares/>} />
          <Route path="/pelicula/:id" element={<Pelicula />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
