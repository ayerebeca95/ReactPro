import './App.css';
import NavBar from './components/NavBar';

function App() {

  const nombre = "sebas"
  const trabajos = {
    manana: "profe",
    tarde: "joyero",
    noche: "fabrica",
  }
  return (
    <div className= "container">
    {/*<div className="App" >
      <p>{nombre} </p>
      <p> Ayeee </p>
      <h1>Trabajos</h1>
      <p>{trabajos.manana}</p>
      <p>{trabajos.tarde}</p>
      <input placeholder= "inrese lo que quiera"/> 
  </div>*/}
  <NavBar/>
    </div>
  );
}

export default App;
