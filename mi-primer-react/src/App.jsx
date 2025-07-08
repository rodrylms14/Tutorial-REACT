import { Routes, Route, Link } from "react-router-dom";
import Usuarios from "./Usuarios";
import Formulario from "./formulario";
import Batallas from "./Batallas";
import BotonColor from "./BotonColor"
function App() {
  return (
    <div>
      <h1>Mi App con Rutas</h1>

      {/* Navegación */}
      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/usuarios">Usuarios</Link> |{" "}
        <Link to="/formulario">Formulario</Link> |{" "}
        <Link to="/batallas">Batallas</Link> |{' '}
        <Link to="/botonColor">Boton Color</Link>


      </nav>

      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<h2>Página de Inicio</h2>} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/batallas" element={<Batallas/>} />
        <Route path="/botonColor" element={<BotonColor/>} />
      </Routes>
    </div>
  );
}

export default App;



