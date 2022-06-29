import { useState } from "react";
//import { Accordion } from "@mui/material";
import "./App.css";
//import Input from "./components/Input";
//import AcordionControlado from "./components/AcordionControlado";
import NavBar from "./components/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import ItemCount from "./ItemCount/ItemCount.js";

function App() {
  const [containerVisible, setContainerVisible] = useState (true)
  
  const onHideContainer = () => {
    setContainerVisible (false)
  }

  return (
    <div className="container">
      <NavBar />
      <ItemCount/>
      {containerVisible ? 
      <ItemListContainer greeting= "Hola coders">
        <h2> Este es el item list container</h2>
      </ItemListContainer>
      :
      null
    }
    <button onClick={onHideContainer} >Desmontarl item list</button>
</div>
  );
}

export default App;
