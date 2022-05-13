import { useState, useEffect } from 'react';


const ItemCount = ({ stock = 0, initial = 1, onAdd}) => {
    const [count, setCount] = useState(0); 

        useEffect(() => {
          setCount(initial);
        }, [initial]);
    
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
        <div className="itemCount">
          <button onClick={increment}>+</button>
          {count}

          <button onClick={decrement}>-</button>
          {stock ? (
            <button onClick={() => onAdd(count)}>Add to Cart</button>
          ) : (
            <button disabled>Add to Cart</button>
          )}
        </div>
      </>
    );
                }
                export default ItemCount;