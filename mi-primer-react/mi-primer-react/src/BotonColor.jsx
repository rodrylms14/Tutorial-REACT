import { useState } from "react";

function ColorClick() {
  const [color, setColor] = useState("white"); // color inicial

  function cambiarColor() {
    setColor("red"); // cambia el color a rojo
  }

  return (
    <div>
      <p style={{ backgroundColor: color, padding: '10px' }}>
        Esto es {color}
      </p>
      <button onClick={cambiarColor}>Click aquí</button>
    </div>
  );
}

export default ColorClick;
