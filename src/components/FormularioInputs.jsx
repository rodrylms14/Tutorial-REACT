import { useState } from "react";
import "../styles/Formulario.css"; // Asegúrate de tener estilos de error

function FormularioInputs() {
  const [form, setForm] = useState({
    nombre: "",
    pais: "",
    genero: "",
    terminos: false,
  });

  const [errores, setErrores] = useState({});

  const validarCampo = (nombre, valor) => {
    const nuevosErrores = { ...errores };

    if (nombre === "nombre") {
      nuevosErrores.nombre = valor.trim() ? "" : "El nombre es obligatorio";
    }

    if (nombre === "pais") {
      nuevosErrores.pais = valor ? "" : "Selecciona un país";
    }

    if (nombre === "genero") {
      nuevosErrores.genero = valor ? "" : "Selecciona tu género";
    }

    if (nombre === "terminos") {
      nuevosErrores.terminos = valor ? "" : "Debes aceptar los términos";
    }

    setErrores(nuevosErrores);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const nuevoValor = type === "checkbox" ? checked : value;

    setForm({
      ...form,
      [name]: nuevoValor,
    });

    validarCampo(name, nuevoValor);
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const hayErrores = Object.values(errores).some((err) => err !== "");
  if (!hayErrores) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Respuesta del servidor:", data);
        alert("Datos enviados correctamente ✅ (simulado)");
      })
      .catch((error) => {
        console.error("Error al enviar datos:", error);
        alert("Hubo un error al enviar los datos ❌");
      });
  } else {
    alert("Corrige los errores antes de enviar 🚫");
  }
};


  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Formulario en Tiempo Real</h2>

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
        País:
        <select name="pais" value={form.pais} onChange={handleChange}>
          <option value="">-- Selecciona un país --</option>
          <option value="Costa Rica">Costa Rica</option>
          <option value="México">México</option>
          <option value="Colombia">Colombia</option>
        </select>
        {errores.pais && <span className="error">{errores.pais}</span>}
      </label>

      <div>
        Género:
        <label>
          <input
            type="radio"
            name="genero"
            value="masculino"
            checked={form.genero === "masculino"}
            onChange={handleChange}
          />
          Masculino
        </label>
        <label>
          <input
            type="radio"
            name="genero"
            value="femenino"
            checked={form.genero === "femenino"}
            onChange={handleChange}
          />
          Femenino
        </label>
        {errores.genero && <span className="error">{errores.genero}</span>}
      </div>

      <label>
        <input
          type="checkbox"
          name="terminos"
          checked={form.terminos}
          onChange={handleChange}
        />
        Acepto los términos
        {errores.terminos && <span className="error">{errores.terminos}</span>}
      </label>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioInputs;
