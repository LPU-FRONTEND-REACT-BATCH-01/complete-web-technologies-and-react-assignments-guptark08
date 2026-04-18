import { useState } from "react";

export default function Condition() {
    let [count, setCount] = useState(0);
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>update count</button>
            {
                count == 0 ? <h1>condition 0</h1> :
                    count == 1 ? <h1>condition 1</h1> :
                        count == 2 ? <h1>condition 2</h1> :
                            count == 3 ? <h1>condition 3</h1> :
                                <h1>other condition</h1>
            }
        </div>
    )
}