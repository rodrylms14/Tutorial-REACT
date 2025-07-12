import { useState } from "react";
import "../styles/FormularioAvanzado.css"; // Usa el mismo CSS de antes

function FormularioCompleto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    edad: "",
    pais: "",
    genero: "",
    terminos: false,
  });

  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const validarCampo = (nombre, valor) => {
    const nuevosErrores = { ...errores };

    switch (nombre) {
      case "nombre":
        nuevosErrores.nombre = valor.trim() ? "" : "El nombre es obligatorio";
        break;
      case "email":
        nuevosErrores.email = valor.includes("@") ? "" : "Email inválido";
        break;
      case "edad":
        nuevosErrores.edad =
          valor && !isNaN(valor) && valor > 0 ? "" : "Edad inválida";
        break;
      case "pais":
        nuevosErrores.pais = valor ? "" : "Selecciona un país";
        break;
      case "genero":
        nuevosErrores.genero = valor ? "" : "Selecciona un género";
        break;
      case "terminos":
        nuevosErrores.terminos = valor ? "" : "Debes aceptar los términos";
        break;
      default:
        break;
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

    // Validación final antes de enviar
    const campos = Object.keys(form);
    campos.forEach((campo) => validarCampo(campo, form[campo]));

    const erroresPresentes = Object.values(errores).some((err) => err);
    if (erroresPresentes) {
      alert("Por favor corrige los errores antes de enviar.");
      return;
    }

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Enviado a la API:", data);
        setEnviado(true);
      })
      .catch((error) => {
        console.error("Error al enviar:", error);
        alert("Hubo un error al enviar el formulario.");
      });
  };

  return (
    <div className="form-container">
      <h2>Registro de Usuario</h2>
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

        <label>
          País:
          <select name="pais" value={form.pais} onChange={handleChange}>
            <option value="">-- Selecciona un país --</option>
            <option value="Costa Rica">Costa Rica</option>
            <option value="México">México</option>
            <option value="Argentina">Argentina</option>
          </select>
          {errores.pais && <span className="error">{errores.pais}</span>}
        </label>

        <div>
          Género:
          <label>
            <input
              type="radio"
              name="genero"
              value="Masculino"
              checked={form.genero === "Masculino"}
              onChange={handleChange}
            />
            Masculino
          </label>
          <label>
            <input
              type="radio"
              name="genero"
              value="Femenino"
              checked={form.genero === "Femenino"}
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
          Acepto los términos y condiciones
          {errores.terminos && <span className="error">{errores.terminos}</span>}
        </label>

        <button type="submit">Registrar</button>
      </form>

      {enviado && (
        <div className="resultado">
          <h3>Registro completado ✅</h3>
          <p>Nombre: {form.nombre}</p>
          <p>Email: {form.email}</p>
          <p>Edad: {form.edad}</p>
          <p>País: {form.pais}</p>
          <p>Género: {form.genero}</p>
        </div>
      )}
    </div>
  );
}

export default FormularioCompleto;
