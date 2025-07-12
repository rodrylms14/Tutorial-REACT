import { Routes, Route, Link } from "react-router-dom";
import Usuarios from "./Usuarios";
import Formulario from "./formulario";
import Batallas from "./Batallas";
import BotonColor from "./BotonColor"
import Click from "./Click";
import Contador from "./Contador";
import Mensaje from "./Mensaje";
import Ranking from "./Ranking";
import ReducirContador from "./ReducirContador";
import saludo from "./saludo";
import TopRanking from "./TopRanking";


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
        <Link to="/botonColor">Boton Color</Link> |{' '}
        <Link to="/Click">Click</Link> |{' '}
        <Link to = "/Contador">Contador</Link> |{' '}
        <Link to = "/ReducirContador">Reducri Contador</Link> |{' '}
        <Link to = "/Mensaje">Mensaje</Link> |{' '}
        <Link to = "/Ranking"> Ranking Mundial</Link> |{' '}
        <Link to = "/TopRanking">TOP</Link> |{' '}
        <Link to = "/Mensaje">Mensaje</Link> |{' '}


      </nav>

      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<h2>Página de Inicio</h2>} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/batallas" element={<Batallas/>} />
        <Route path="/botonColor" element={<BotonColor/>} />
        <Route path="/click" element={<Click/>} />
        <Route path="/contador" element={<Contador/>} />
        <Route path="/reducirContador" element={<ReducirContador/>} />
        <Route path="/Mensaje" element={<Mensaje/>} />
        <Route path="/ranking" element={<Ranking/>} />
        <Route path="/topRanking" element={<TopRanking/>} />
        <Route path="/mensaje" element={<Mensaje/>} />
      </Routes>
    </div>
  );
}

export default App;



