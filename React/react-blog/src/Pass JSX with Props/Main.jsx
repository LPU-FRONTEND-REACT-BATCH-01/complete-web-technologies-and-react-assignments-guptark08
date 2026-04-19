import { useState } from "react";
import UserName from "./UserComponenet";

export default function Main() {
    const [student] = useState("Arush");
    return (
        <div>
            <UserName name  = {student}/>
        </div>
    )
}
