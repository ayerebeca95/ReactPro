import React from 'react';
import jacuzzi1 from "../../assets/jacuzzi1.jpg";

const ItemListContainer = ({greeting}) => {
  return (
    <div>
   <p> {greeting} </p>
   <img src= {jacuzzi1}  alt="jacuzzi" />
   </div>
  )
}

export default ItemListContainer