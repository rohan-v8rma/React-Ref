import React from "react";

class ClassStatefulComp extends React.Component {
    
    // When a ClassStatefulComp component is passed to `root.render()`, React calls the `constructor` method of ClassStatefulComp component. Used to initialize the states.
    constructor(props) {
        super(props); // Mandatory for derived classes

        // Using this method of setting the state of a component is only appropriate inside the constructor. `setState()` should be used thereafter.
        this.state = {
            date: new Date()
        }

    }

    // This `lifecycle method` is called once the element created using ClassStatefulComp component has been inserted in the DOM.
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    
    }

    // This `lifecycle method` is called if the element created using the ClassStatefulComp component is ever removed from the DOM.
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        })
    }

    // The below method is called after `constructor` has been called. React takes a look at the output of the below function and sees what needs to be changed in the React DOM.
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}


export default ClassStatefulComp;