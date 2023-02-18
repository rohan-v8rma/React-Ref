import React from "react";
import { useState } from "react"; // Since this is a named import, we can use this method directly using its name. Otherwise, we would have had to use React.useState()

function FunctionalStatefulComp() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("John"); // The useState() hook can be used multiple times to manage multiple state variables.

    // In the above cases, `setCount` and `setName` are state update functions.

    return (<div>
        <p>Count: {count}</p>
        {/* 
        Arrow function (called Updater Function) has been used since the next state value is dependent on the current state value. 
        
        Read more about it here: https://beta.reactjs.org/reference/react/useState#updating-state-based-on-the-previous-state
        */}
        <button onClick={() => setCount(state => state + 1)}>Increment count</button>

        <p>Name: {name}</p>
        <button onClick={() => setName("Jane")}>Change name</button>
    </div>)
}

export default FunctionalStatefulComp