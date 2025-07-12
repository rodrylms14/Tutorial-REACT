import { useState } from "react";

function MensajeClick() {
  const [mensaje, setMensaje] = useState("Haz clic en el botón");

  function cambiarMensaje() {
    setMensaje("¡Click realizado! 😄");
  }

  return (
    <div>
      <h2>{mensaje}</h2>
      <button onClick={cambiarMensaje}>Clic aquí</button>
    </div>
  );
}

export default MensajeClick;