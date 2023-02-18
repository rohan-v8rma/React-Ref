import { useState, useEffect } from "react";

//? NOTE: The double printing of the outputs of the callbacks passed to the useEffect function is due to React Strict Mode

export default function UseEffectTest() {
    const [count, setCount] = useState(0)

    //* By-default, useEffect will be executed on first render (after mounting) as well as every re-render (after updating).
    //? The code working here can be thought of as a combination of `componentDidMount` and `componentDidUpdate`
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
    })

    //! We can pass an array as the second argument of the useEffect hook which is called the `dependency array`. This can contain `state` or `prop` values, that trigger a re-render upon their change, and then subsequently result in a call to the callback passed to the `useEffect` hook. 
    //! Observe that we are passing a callback to the useEffect hook, rather than a function call. So, the code will NOT necessarily execute synchronously on re-render.

    //* We can make the execution of `useEffect` dependent on a couple of values, placed inside the `dependency array`
    //? The code below achieves the function of only `componentDidMount`
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/2')
            .then(response => response.json())
            .then(json => console.log(json))
    }, []) // Empty dependency array
 
    //* Actually placing a value in the dependency array
    //? The code below achieves the function of `componentDidMount` as well as `componentDidUpdate` where it compares the previous state (passed as an argument in the case of `componentDidUpdate`) with the current state before executing.
    useEffect(() => {
        console.log("State changed")
    }, [count]) // Execution of callback dependent on `count`


    return (<>
    {/* Passing a callback to the button element */}
    <button onClick={() => setCount(prevCount => prevCount + 1)}>bruhhhhhh{count}</button>
    </>)
}