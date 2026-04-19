import { useState } from "react";

export default function Input() {
    const [val, setVal] = useState("");
    return (
    <div>
        <input type="text" name="data" onChange={(event) => setVal(event.target.value)} value={val} id="data" placeholder="get user name" />
        <h1>{val}</h1>
        <button type="button" onClick={() => setVal("")}>Clear</button>
    </div>
    );
}
