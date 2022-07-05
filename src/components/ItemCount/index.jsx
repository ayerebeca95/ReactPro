import React, { useState} from 'react'

const ItemCount = ({handleAdd, initial, Stock}) => {

    const [counter, setCounter] = useState(initial)

    const onAdd = () => {
   setCounter(counter + 1)

    }

    const onDecrement = () => {
        setCounter(counter - 1)
    }
  return (
    <div>
   <p>{counter} </p> {counter}
   <button onClick={onAdd}>+</button>
   <button onClick={onDecrement}>-</button>
 <button onClick={ ()=> handleAdd (counter) }>Agregar al carrito</button>
 </div>
   )
}

export default ItemCount