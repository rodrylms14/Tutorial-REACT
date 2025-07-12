import { useParams } from "react-router-dom";

function UsuarioDetalle() {
  const { id } = useParams(); // Extrae el parámetro de la URL

  return (
    <div>
      <h2>Detalle del Usuario</h2>
      <p>Mostrando información del usuario con ID: {id}</p>
    </div>
  );
}

export default UsuarioDetalle;
