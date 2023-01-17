import React from "react";
import { useState } from "react"; // Since this is a named import, we can use this method directly using its name. Otherwise, we would have had to use React.useState()

function FunctionalStatefulComp() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("John"); // The useState() hook can be used multiple times to manage multiple state variables.

    return (<div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment count</button>

        <p>Name: {name}</p>
        <button onClick={() => setName("Jane")}>Change name</button>
    </div>)
}

export default FunctionalStatefulComp