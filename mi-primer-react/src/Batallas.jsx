import { useEffect, useState } from "react";

function Batallas() {
  const [jugadores, setJugadores] = useState([]);
  const [historial, setHistorial] = useState([]);

  // Generar jugadores iniciales
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=9")
      .then((res) => res.json())
      .then((data) => {
        const nuevos = data.results.map((j, index) => ({
          id: index + 2,
          nombre: j.name.first.toUpperCase(),
          copas: 0
        }));

        nuevos.push({ id: 1, nombre: "RODRYLMS14", copas: 300 });

        setJugadores(nuevos);
      });
  }, []);

  // Simular batallas cada 10 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      const jugadoresActualizados = [...jugadores];
      const historialNuevo = [];

      // Barajamos los jugadores aleatoriamente
      const mezcla = [...jugadoresActualizados].sort(() => 0.5 - Math.random());

      // Emparejamos de 2 en 2
      for (let i = 0; i < mezcla.length - 1; i += 2) {
        const jugador1 = mezcla[i];
        const jugador2 = mezcla[i + 1];

        const ganador = Math.random() > 0.5 ? jugador1 : jugador2;
        const perdedor = ganador === jugador1 ? jugador2 : jugador1;

        // Ganador +30 copas
        ganador.copas += 30;

        // Perdedor -30 copas (mínimo 0)
        perdedor.copas = Math.max(perdedor.copas - 30, 0);

        historialNuevo.push(`${ganador.nombre} venció a ${perdedor.nombre}`);
      }

      setJugadores(jugadoresActualizados);
      setHistorial((prev) => [...prev.slice(-10), ...historialNuevo]);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [jugadores]);

  return (
    <div>
      <h2>Simulación de Batallas</h2>

      <h3>Ranking</h3>
      <ol>
        {[...jugadores]
          .sort((a, b) => b.copas - a.copas)
          .map((j) => (
            <li key={j.id}>
              {j.nombre} - {j.copas} copas
            </li>
          ))}
      </ol>

      <h3>Últimas batallas</h3>
      <ul>
        {historial.slice().reverse().map((batalla, i) => (
          <li key={i}>{batalla}</li>
        ))}
      </ul>
    </div>
  );
}

export default Batallas;
