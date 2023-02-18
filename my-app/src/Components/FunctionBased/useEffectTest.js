import { useState, useEffect } from "react";

export default function UseEffectTest() {
    const [count, setCount] = useState(0)

    //* By-default, useEffect will be executed on first render (after mounting) as well as every re-render (after updating).
    //? The code working here can be thought of as a combination of `componentDidMount` and `componentDidUpdate`
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    })


    return (<>
    {/* Passing a callback to the button element */}
    <button onClick={() => setCount(prevCount => prevCount + 1)}>bruhhhhhh{count}</button>
    </>)
}