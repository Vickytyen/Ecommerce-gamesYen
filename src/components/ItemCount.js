import { useState } from 'react';

const ItemCount = ({ stock = 0, initial = 1, onAdd}) => {
    const [count, setCount] = useState(0); //Hook
    
    const increment = () => {
        if (count < stock){
            setCount(count + 1);
        }
    }
    
    const decrement = () => {
        if (count > initial){
            setCount(count - 1);
        }
    }
    
    return (
        <>
        <button onClick={increment}>+</button>
        {count}
        <button onClick={decrement}>-</button>
        {
            stock ? (
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>
                ) : (
                    <button disabled >Agregar al carrito</button>
                    )}
                    </>
                    );
                }
                export default ItemCount;