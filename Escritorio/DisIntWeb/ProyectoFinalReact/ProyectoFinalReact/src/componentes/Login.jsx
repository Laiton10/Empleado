import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ handleLogin }) {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(nickname); // Guardo el nickname en App.jsx
    navigate('/'); // Redirijo a la página principal después de iniciar sesión
  };

  return (
    <div className="contenedorLogin">
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="nickname">Nickname:</label>
          <input
            type="text"
            id="nickname"
            placeholder="Introduce tu nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            placeholder="Introduce tu contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
