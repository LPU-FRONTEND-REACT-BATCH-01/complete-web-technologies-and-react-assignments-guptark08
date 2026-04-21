import { useState } from 'react';
import './UserComponents.css';

export let name = "Arush Gupta";

export default function Heading() {
    return (
        <h1>{name} ToDo's List</h1>
    )
}

export function Image() {
    return (
        <div>
            <img id="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/500px-Cat_November_2010-1a.jpg" alt="Tobby Cat Image" />
        </div>
    )
}

export function List() {
    return (
        <ul>
            <li>Invent new traffic lights</li>
            <li>Rehearse a movie scene</li>
            <li>Improve the spectrum technology</li>
        </ul>
    )
}

export function ClickButton() {
    let [click, setButtonClicked] = useState("Click me")

    let handleButton = () => {
        setButtonClicked("Button Clicked");
        alert("button clicked");
    }

    return (
        <button onClick={handleButton}>{click}</button>
    )
}

