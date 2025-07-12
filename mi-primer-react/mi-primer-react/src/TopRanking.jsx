import { useEffect, useState } from "react";

function  TopRanking() {
  const [ranking, setRanking] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const obtenerRanking = () => {
      fetch("https://randomuser.me/api/?results=24")
        .then((res) => res.json())
        .then((data) => {
          // Creamos la lista de jugadores con nombres y copas aleatorias
          const jugadores = data.results.map((jugador, index) => ({
            id: index + 2,
            nombre: jugador.name.first.toUpperCase(),
            copas: Math.floor(Math.random() * 10000)
          }));

          // Agregamos a RODRYLMS14 fijo
          jugadores.push({
            id: 1,
            nombre: "RODRYLMS14",
            copas: Math.floor(Math.random() * 10000)
          });

          // Ordenamos por copas descendente
          jugadores.sort((a, b) => b.copas - a.copas);

          setRanking(jugadores);
          setCargando(false);
        })
        .catch((error) => {
          console.error("Error al obtener datos de jugadores", error);
        });
    };

    obtenerRanking();

    const intervalo = setInterval(() => {
      obtenerRanking();
    }, 5000); // cada 5 segundos

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h2>Top Mundial - Actualiza cada 5 segundos</h2>
      {cargando ? (
        <p>Cargando jugadores...</p>
      ) : (
        <ol>
          {ranking.slice(0, 30).map((jugador, index) => (
            <li key={jugador.id}>
              #{index + 1} {jugador.nombre} - {jugador.copas} copas
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default TopRanking;
