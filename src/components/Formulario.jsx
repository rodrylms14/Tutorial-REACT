import { useState } from "react";
import "../styles/Formulario.css";

function Formulario() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    email: ""
  });

  const [mostrar, setMostrar] = useState(false);

  // Maneja los cambios en cualquier input
  function manejarCambio(e) {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,         // conserva los valores anteriores
      [name]: value          // actualiza solo el campo que cambió
    });
  }

  function manejarEnvio(e) {
    e.preventDefault();
    setMostrar(true);
  }

  return (
    <div className="container-form">
      <form onSubmit={manejarEnvio}>
        <label>
          Nombre:
          <input className="Input-nombre"
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
          />
        </label>
        <br />
        <label>
          Apellido:
          <input className="Input-apellido"
            type="text"
            name="apellido"
            value={formulario.apellido}
            onChange={manejarCambio}
          />
        </label>
        <br />
        <label>
          Email:
          <input className="Input-email"
            type="email"
            name="email"
            value={formulario.email}
            onChange={manejarCambio}
          />
        </label>
        <br />
        <button type="submit" className="botton">Enviar</button>
      </form>

      {mostrar && (
        <p>
          ¡Hola {formulario.nombre} {formulario.apellido}, tu correo es{" "}
          {formulario.email}!
        </p>
      )}
    </div>
  );
}

export default Formulario;
