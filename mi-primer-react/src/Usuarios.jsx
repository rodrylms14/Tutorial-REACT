import { useEffect, useState } from "react";

function Usuarios(){
    const [usuario, setUsuarios] = useState([]);

    //Este UseEffect se eejecuta UNA VEZ al montar el componente
    useEffect(()=>{
        //Llamada a la API
        fetch("https://jsonplaceholder.typicode.com/users")
        .then ((res) => res.json())
        .then((data) => setUsuarios(data))
        .catch((error) => console.error("Error al obtener ususarios", error));
    }, []);

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {usuario.map((usuario)=>(
                    <li key={usuario.id}>
                        {usuario.name} ({usuario.email})
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Usuarios;