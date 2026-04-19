import { useState } from "react";
import PropsData from "./PropsTransferData";
import Student from "./StudentProps";

export default function PassingUserInProps() {
  let users = {
    name: "arush gupta",
    age: 26,
    email: "arush@test.com",
  };

  const [student] = useState("Arush");

  return (
    <div>
      <h1>this is props example</h1>
      <br />
      <hr />
      {student && <Student name={student} />}
      <PropsData user={users} />
      <hr />
    </div>
  );
}
