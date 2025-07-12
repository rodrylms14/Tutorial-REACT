import { useState } from "react";

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
    <div>
      <form onSubmit={manejarEnvio}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
          />
        </label>
        <br />
        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            value={formulario.apellido}
            onChange={manejarCambio}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formulario.email}
            onChange={manejarCambio}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
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
