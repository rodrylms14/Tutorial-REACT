import { useEffect, useState } from "react";

function Ranking(){
    const [ranking, setRanking] = useState([]);
    const [usuario, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(()=>{
        const obtenerRanking = () =>{
            //Simulacion de datos dinamicos

            const datosFalsos =  [
                {id: 1, nombre: "RODRYLMS14", copas: Math.floor(Math.random() * 10000) },
                {id: 2, nombre: "MARIOCR", copas: Math.floor(Math.random() * 10000) },
                {id: 3, nombre: "ROJAS894", copas: Math.floor(Math.random() * 10000) },
            ];

            //Ordenamos de mayor a menor como en clash
            datosFalsos.sort((a, b) => b.copas - a.copas);

            setRanking(datosFalsos);
            setCargando(false);

        };
            //Llamamos la primera vez
            obtenerRanking();

            //Cada 3 segundos lo vuelve a hacer(3000 ms)
            const intervalo = setInterval(() =>{
                obtenerRanking();
            }, 3000);
            
            //Limpiar intervalo si el componente se desmonta
            return () => clearInterval(intervalo);
    }, []);
    
    return (
        <div>
            <h2>Top Mundial (Actualiza cada 3 seg)</h2>
            {cargando ? (
                <p>Cargando ranking....</p>
            ) :(
                <ol>
                    {ranking.map((jugador)=> (
                        <li key={jugador.id}>
                        {jugador.nombre}: {jugador.copas} copas
                        </li>
                    ))}
                </ol>
            )}
        </div>
    )
}

export default Ranking;