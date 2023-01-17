import React from "react";

class ClassBasedStatefulComp extends React.Component {

    // When a ClassBasedStatefulComp component is passed to `root.render()`, React calls the `constructor` method of ClassBasedStatefulComp component. Used to initialize the states.
    constructor(props) {
        super(props); // Mandatory for derived classes

        // Using this method of setting the state of a component is only appropriate inside the constructor. `setState()` should be used thereafter.
        this.state = {
            name: "John",
            count: 0,
            date: new Date()
        }
    }

    //! Arrow function needed over here, to preserve the `this` value which points to the current component instance in the global scope of the class.
    incrementCount = () => {

      // Passing a callback function to setState() since the next state depends on the current state
      // Read about it here: https://reactjs.org/docs/state-and-lifecycle.html
      this.setState((state, props) => ({
        count: state.count + 1,
      }));
    }

    //! Arrow function needed over here, to preserve the `this` value which points to the current component instance in the global scope of the class.
    changeName = () => {

      // Using the regular form of the setState() call since the next state doesn't depend on the current state
      this.setState({ 
        name: "Jane" 
      });
    }


    // This `lifecycle method` is called once the element created using ClassBasedStatefulComp component has been inserted in the DOM. 
    //? No need for arrow function over here since this is a pre-defined method of class based react components, whose `this` value is automatically tied to the current component instance.
    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
    }


    // This `lifecycle method` is called if the element created using the ClassBasedStatefulComp component is ever removed from the DOM.
    //? No need for arrow function over here since this is a pre-defined method of class based react components, whose `this` value is automatically tied to the current component instance.
    componentWillUnmount = () => {
      clearInterval(this.timerID);
    }

    tick = () => {
        this.setState({
            date: new Date(),
        })
    }

    // The below method is called after `constructor` has been called. React takes a look at the output of the below function and sees what needs to be changed in the React DOM.
    render() {
        return (<div>
            <p>Date: {this.state.date.toString()}</p>

            <p>Count: {this.state.count}</p>
            {/* Button 1 */}
            <button onClick={() => this.incrementCount()}>Increment count</button>
    
            <p>Name: {this.state.name}</p>
            {/* Button 2 */}
            <button onClick={() => {this.changeName()}}>Change name</button>

            {/* Arrow function used in both buttons, to maintain the `this` value from parent, which is the `render()` method. We know that the `this` value in render() points to the current component instance */}
        </div>)
    }
    
}

export default ClassBasedStatefulComp