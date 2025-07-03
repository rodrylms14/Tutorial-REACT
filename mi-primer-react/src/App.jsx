import Saludo from './saludo'; //Importamos el saludo del otro archivo
import Mensaje from "./mensaje";
import Contador from "./Contador";
import MensajeClick from "./click"
import ColorClick from './BotonColor';
function App(){
  return (
    <div>
      <h1>Bienvenido!</h1>
      <Saludo nombre="Rodrigo" /> 
      <Saludo nombre="Aqui estamos utilizando un componente que recibe un mensaje prop" /> 
      <Saludo nombre= "Mario" /> 
      <Mensaje mensaje="Aprender react es divertido" />
      <h5>Esto es un contador:
        <Contador/>
      </h5>
      <MensajeClick/>
      <ColorClick/>

    </div>
  )
}



export default App;


