import { useState } from "react";
import { name } from "./UserComponents";

export default function ToggleName() {
    const [display, setDisplay] = useState(true);

    return (
        <div>
            <h2>toggle show or hide</h2>
            <button type="button" onClick={() => setDisplay(!display)}>Show</button>
            {
                display ? <h1>{name}</h1> : null
            }

        </div>
    )
}