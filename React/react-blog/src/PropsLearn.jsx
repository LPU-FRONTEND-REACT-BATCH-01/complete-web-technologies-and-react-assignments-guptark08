import PropsData from "./PropsTransferData"

export default function PassingUserInProps() {
    let users = {
        name: "arush gupta",
        age: 26,
        email: "arush@test.com"
    }

    return (
        <div>
            <h1>this is props example</h1><br />
            <PropsData user={users} />
        </div>
    )
}