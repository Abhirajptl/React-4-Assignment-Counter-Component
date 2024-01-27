import { useState } from 'react'

export function Counter(){
    const [count, setCount] = useState(1);

    return (
        <div id="abc">
        <p id="efg">Count : {count}</p>
        <button onClick={() => {
            setCount(count+1)
        }}>Increment by 1</button>
        <button onClick={() => {
            setCount(count-1)
        }}>Decrement by 1</button>
        </div>
    )

}

