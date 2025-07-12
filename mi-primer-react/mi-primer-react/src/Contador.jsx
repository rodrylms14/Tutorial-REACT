import { useState } from 'react';

function Contador() {
  // Declaramos una variable de estado llamada "cuenta"
  const [cuenta, setCuenta] = useState(0);

  // Función para aumentar el contador
  function aumentar() {
    setCuenta(cuenta + 1);
  }

  //Funcion para disminuir el contador
  function disminuir(){
    setCuenta(cuenta - 1);
  }


  return (
    <div>
      <h2>Contador: {cuenta}</h2>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
      {cuenta % 2 === 0 ? <p>El número es par</p> : <p>El número es impar</p>}  


    </div>
  );
}

export default Contador;
