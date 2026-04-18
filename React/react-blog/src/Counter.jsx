import { useState } from "react";

export function Counter() {
    let [count, updateCounter] = useState(0);

    const addInCounter = () => {
        updateCounter(count + 1);
    }

    const reduceInCounter = () => {
        updateCounter(count - 1);
    }

    const resetCounter = () => {
        updateCounter(0);
    }

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={addInCounter}>Add</button>
            <button onClick={reduceInCounter}>Reduce</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    )
}