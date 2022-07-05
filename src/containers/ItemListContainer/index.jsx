import React, { useState, useEffect } from "react";
import ItemCount from '../../components/ItemCount'
import "./styles.css"
//import jacuzzi1 from "../../assets/jacuzzi1.jpg";

const ItemListContainer = ({ greeting, children }) => {
 // let color = "blue";

 const [color, setColor] = useState ("blue");

  const cambiarColor = () => {
  if (color === "blue" ) setColor ("red")
  else setColor ("blue")
  }
   
  useEffect (() => {
    console.log("se monto un componente")
  }, [color]
  )

  useEffect ( () => {
    return () => {
      console.log("se desmonta");
    }
  }, [])

  const handleAdd = (counter) => {
   console.log(`se agrego al carrito ${counter} productos`);
  } 

  return (
    <div style= {{backgroundColor : color}} className= "medioC">
      <p> {greeting} </p>
      <p> {color} </p>
      <button onClick={cambiarColor}>
        Cambiar color a red
      </button>
     <ItemCount handleAdd= {handleAdd} initial = {1}  stock={10} />
      {/* <img src= {jacuzzi1}  alt="jacuzzi" />
      {children}
      <button className="btn btn-primary lg"> Presione aqui </button>*/}
    </div>
  );
};

export default ItemListContainer;
