import { useState } from "react";
import "../styles/FormularioAvanzado.css";

function FormularioAvanzado() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    edad: "",
  });

  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  // Validaciones simples
  const validar = () => {
    const nuevosErrores = {};

    if (!form.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }

    if (!form.email.includes("@")) {
      nuevosErrores.email = "Debe ser un email válido";
    }

    if (!form.edad || isNaN(form.edad) || form.edad <= 0) {
      nuevosErrores.edad = "Edad inválida";
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setEnviado(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      setEnviado(true);
    }
  };

  return (
    <div className="form-container">
      <h2>Formulario Avanzado</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
          />
          {errores.nombre && <span className="error">{errores.nombre}</span>}
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errores.email && <span className="error">{errores.email}</span>}
        </label>

        <label>
          Edad:
          <input
            type="number"
            name="edad"
            value={form.edad}
            onChange={handleChange}
          />
          {errores.edad && <span className="error">{errores.edad}</span>}
        </label>

        <button type="submit">Enviar</button>
      </form>

      {enviado && (
        <div className="resultado">
          <h3>Datos enviados:</h3>
          <p>Nombre: {form.nombre}</p>
          <p>Email: {form.email}</p>
          <p>Edad: {form.edad}</p>
        </div>
      )}
    </div>
  );
}

export default FormularioAvanzado;
