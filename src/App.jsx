import "./index.css";
//import Input from "./components/Input";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";

function App() {
  return (
    <div className="container">
      <NavBar />
      <ItemListContainer greeting= "Hola coders" />
</div>
  );
}

export default App;
