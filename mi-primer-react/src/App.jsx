import { Routes, Route, Link } from "react-router-dom";
import Usuarios from "./components/Usuarios";
import Formulario from "./components/Formulario";
import Batallas from "./components/Batallas";
import BotonColor from "./components/BotonColor"
import Click from "./components/Click";
import Contador from "./components/Contador";
import Mensaje from "./components/Mensaje";
import Ranking from "./components/Ranking";
import Saludo from "./components/Saludo";
import TopRanking from "./components/TopRanking";
import NoEncontrado from "./components/NoEncontrado";
import UsuarioDetalle from "./components/UsuarioDetalle";
import FormularioAvanzado from "./components/FormularioAvanzado";
import FormularioInputs from "./components/FormularioInputs";
import FormularioCompleto from "./components/FormularioCompleto";

function App() {
  return (
    <div>
      <h1>Mi App con Rutas</h1>

      {/* Navegación */}
      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/Usuarios">Usuarios</Link> |{" "}
        <Link to="/Formulario">Formulario</Link> |{" "}
        <Link to="/Batallas">Batallas</Link> |{' '}
        <Link to="/BotonColor">Boton Color</Link> |{' '}
        <Link to="/Click">Click</Link> |{' '}
        <Link to ="/Contador">Contador</Link> |{' '}
        <Link to ="/Mensaje">Mensaje</Link> |{' '}
        <Link to ="/Ranking"> Ranking Mundial</Link> |{' '}
        <Link to ="/TopRanking">TOP</Link> |{' '}
        <Link to ="/Mensaje">Mensaje</Link> |{' '}
        <Link to ="/Saludo">Saludo</Link> |{' '}
        <Link to ="/FormularioAvanzado">Formulario Avanzado</Link> | {' '}
        <Link to ="/FormularioInputs">Formulario Avanzado 2</Link> | {''}
        <Link to="/FormularioCompleto">Formulario Completo</Link>        
      </nav>

      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<h2>Página de Inicio</h2>} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/usuarios:id" element={<UsuarioDetalle/>}/>
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/batallas" element={<Batallas/>} />
        <Route path="/botonColor" element={<BotonColor/>} />
        <Route path="/click" element={<Click/>} />
        <Route path="/contador" element={<Contador/>} />
        <Route path="/mensaje" element={<Mensaje/>} />
        <Route path="/ranking" element={<Ranking/>} />
        <Route path="/topRanking" element={<TopRanking/>} />
        <Route path="/mensaje" element={<Mensaje/>} />
        <Route path="/saludo" element={<Saludo/>} />
        <Route path="*" element={<NoEncontrado/>}/>
        <Route path="/formularioAvanzado" element={<FormularioAvanzado/>}/>
        <Route path="/formularioInputs" element={<FormularioInputs/>} />
        <Route path="/formularioCompleto" element={<FormularioCompleto/>}/>
      </Routes>
    </div>
  );
}

export default App;



