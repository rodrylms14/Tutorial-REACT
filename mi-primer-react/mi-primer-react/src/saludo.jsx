// Un componente es una función de JavaScript que devuelve JSX (HTML con superpoderes). 
// Podés reutilizarlo en varias partes de tu aplicación, lo que te ayuda a mantener tu código limpio y modular.
function Saludo(props){
    return <h2>Hola, {props.nombre}</h2>
}
export default Saludo;
