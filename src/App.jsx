import "./index.css";
import Input from "./components/Input";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Input valorPlaceholder={"Hola "} title={"como estas"} />
      <Input valorPlaceholder={"Hola "} title={"como estas"} />
    </div>
  );
}

export default App;
