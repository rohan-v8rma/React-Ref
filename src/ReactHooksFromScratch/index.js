import React from "react"

let stateValue = undefined;

const useState = (initialValue) => {
    const setValue = (givenValue) => {
        // The case when state setter takes into account, the value of the current state.
        if(typeof(givenValue) === 'function') {
            stateValue = givenValue(stateValue);
        }
        else {
            stateValue = givenValue;
        }

        console.log(stateValue);
    }

    if(stateValue === undefined) {
        stateValue = initialValue;
    }

    return [stateValue, setValue];
}

export default function ReactHooksFromScratch() {

    const [countA, setCountA] = useState(1);
    // const [countB, setCountB] = useState(-1);

    return (
        <div>
            <div>
                <h1>Count A: {countA}</h1>
                <button onClick={() => setCountA((previousCountValue) => previousCountValue - 1)}>
                    Subtract
                </button>
                <button onClick={() => setCountA((previousCountValue) => previousCountValue + 1)}>
                    Add
                </button>
            </div>
            <div>
                <h1>Count B: -1</h1>
                <button>Subtract</button>
                <button>Add</button>
            </div>
        </div>
    );
}
