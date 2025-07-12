import { useEffect, useState } from "react";
import "../styles/Usuarios.css";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsuarios(data));
  }, []);

  return (
    <div className="usuarios-container">
      <h2 className="titulo">Lista de Usuarios</h2>
      <ul className="usuarios-lista">
        {usuarios.map((usuario) => (
          <li key={usuario.id} className="usuario-item">
            <strong>{usuario.name}</strong> – {usuario.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;
