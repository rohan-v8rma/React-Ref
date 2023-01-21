# INDEX

- [INDEX](#index)
- [selective rendering](#selective-rendering)
- [Updating version of node before `create-react-app`](#updating-version-of-node-before-create-react-app)
- [Creating React Application](#creating-react-application)
- [Importing and Exporting in React](#importing-and-exporting-in-react)
  - [Exporting](#exporting)
    - [Default Exports](#default-exports)
    - [Named Exports](#named-exports)
  - [Importing](#importing)
    - [Using CSS modules in React](#using-css-modules-in-react)
    - [CSS module loader object](#css-module-loader-object)
    - [Using IDs in `.module.css` files](#using-ids-in-modulecss-files)
- [Reconciliation](#reconciliation)
- [Terminologies in React](#terminologies-in-react)
  - [`props`](#props)
    - [Destructuring `props`](#destructuring-props)
    - [Default values for props, along with destructuring](#default-values-for-props-along-with-destructuring)
  - [`refs`](#refs)
  - [`keys`](#keys)
- [Converting a Function to a Class](#converting-a-function-to-a-class)
- [State](#state)
  - [Difference between `setState()` and `useState()`](#difference-between-setstate-and-usestate)
  - [Code-snippet demonstrating usage of `setState()`](#code-snippet-demonstrating-usage-of-setstate)
  - [Code-snippet demonstrating usage of `useState()`](#code-snippet-demonstrating-usage-of-usestate)
- [Conditional Rendering](#conditional-rendering)
  - [Using Short-Circuit Operators](#using-short-circuit-operators)
    - [`&&` operator](#-operator)
    - [`||` operator](#-operator-1)
  - [Using if-else or ternary operators](#using-if-else-or-ternary-operators)
- [React best-practices \& lingo](#react-best-practices--lingo)
  - [Is it ok to use conditional statements inside the `render()` method?](#is-it-ok-to-use-conditional-statements-inside-the-render-method)
  - [Should we use the `document` browser API within React components?](#should-we-use-the-document-browser-api-within-react-components)
  - [What is meaning of *prop coming from above*?](#what-is-meaning-of-prop-coming-from-above)
- [See Edge bookmarks for more resources](#see-edge-bookmarks-for-more-resources)
- [Important Concepts](#important-concepts)
  - [Are the `node_modules` that we use for local development, also used in browser?](#are-the-node_modules-that-we-use-for-local-development-also-used-in-browser)
  - [Configuring React build process](#configuring-react-build-process)
  - [`--isolatedModules` error in React, when using TypeScript](#--isolatedmodules-error-in-react-when-using-typescript)
    - [Using `import` and `export` keywords to fix the error](#using-import-and-export-keywords-to-fix-the-error)
  - [Server Side Rendering](#server-side-rendering)
    - [1. Improved SEO](#1-improved-seo)
    - [2. Faster initial load time](#2-faster-initial-load-time)
    - [3. Better user experience for slow internet connection](#3-better-user-experience-for-slow-internet-connection)
    - [Setting up SSR](#setting-up-ssr)
    - [Downsides of SSR](#downsides-of-ssr)
    - [Overcoming the downsides of SSR](#overcoming-the-downsides-of-ssr)
      - [1. Use caching](#1-use-caching)
      - [2. Use a Content Delivery Network (CDN)](#2-use-a-content-delivery-network-cdn)
      - [3. Use long term caching](#3-use-long-term-caching)
      - [4. Use the browser storage](#4-use-the-browser-storage)
      - [Some caveats with these optimizations](#some-caveats-with-these-optimizations)


state management

state of component

state listener

# selective rendering

call to action


export default meaning'


Welcome.module.css WelcomeStyles.div is an inline style, so it is more powerful than index.css

# Updating version of node before `create-react-app`

1. Install `fnm` (fast node manager) 

    ```console
    root@ubuntu:~$ curl -fsSL https://fnm.vercel.app/install | bash
    ```

    Link to [`fnm`'s github](https://github.com/Schniz/fnm#using-a-script-macoslinux).

2. Run the following commands

    ```bash
    #!/usr/bin/bash

    eval "$(fnm env)"
    fnm --version
    nano .node-version # Enter the version you want to install with prefix `v`
    cat .node-version # Checking whether the version number is correctly stored
    fnm install
    fnm use 
    # Now, re-open the terminal to ensure the new version is displayed. If not, re-run the command just above

    node --version # The new version should now be displayed
    ```

# Creating React Application

After version of node has been updated...

```bash
#!/usr/bin/bash

npx create-react-app my-app
cd my-app

# This starts the live development server, which updates as changes are made
npm start

# OR

# Bundles the app into static files for production. This is done
npm run build
```

# Importing and Exporting in React

https://www.educative.io/answers/what-is-importing-and-exporting-in-react-js

Importing and exporting in React JS helps us write modular code, i.e., splitting code into multiple files. 

- Importing allows using contents from another file, 
- Exporting makes the file contents eligible for importing. 

The basic idea behind imports and exports is to exchange contents between several JavaScript files.

> ***NOTE:*** We can also import CSS files into Javascript in order to use the styles on JSX elements

## Exporting

### Default Exports

Let’s use a file `name.js` with an object `person` and `name` as an attribute.

Export the object in the current file to make this object usable in another file.
```js
//name.js

const person = {
    name:'Kedar'
}

export default person;
```
The snippet `export default person` informs us that we will receive the person object by-default whenever we import from `name.js`.


Modules can only have one default export.

### Named Exports

We can also export multiple elements from a file. 

Let’s consider an `info.js` file where we will individually export the `age` and the `birth_country` of the person above.

```js
//info.js

export const age = 23;
export const birth_country = "India"
```

In short:
- Exports without a `default` tag are Named exports.
- Exports with the `default` tag are Default exports.

Now that you have learned about exporting, let’s look at importing.

## Importing

Similar to exporting, there are two ways to import.

- Importing from default exports.
- Importing from named exports.

For example, we are creating a file `app.js`, and we want to use the contents from `name.js` and `info.js`.

- When importing from `name.js`, a default export can be done as shown below.

    ```js
    import person from './name.js'
    ```
    Since we have a default export, importing anything from that file will provide us with a person object.


- For imports from the `info.js` file, we will import from two different constants.

    Therefore, we use `{}` to precisely target specific things from that file.
    
    These are called *named exports*, as we import them by their name.

    ```js
    import {age} from './info.js'
    import {birth_country} from  info.js'
    ```
    
    As shown below, you can also use aliases while importing in the named exports.

    ```js
    import {birth_country as bc} from 'info.js'
    ```

    You will frequently be using these import and export features throughout React.


### Using CSS modules in React

Files with names of the format `[name].module.css` are modular CSS files, whose CSS properties are locally scoped. If we `import` them as regular `.css` files and try to use their styles, they won't be applied.

Instead we need to `import` them as named-imports. 

### CSS module loader object

This creates a CSS module loader object in JS (TODO: What exactly is this?), which has the class/id names as keys and the uniquely generated CSS classes as values.

Suppose we have the following `.css` file, named `App.module.css`:

```css
.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
}

.App-header {
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
}

.App-intro {
  font-size: large;
}
```

We import this into our `.js` file

```js
import AppStyles from './App.module.css'

console.log(AppStyles)
```

The output of the `console.log` statement is:

![](readme-images/webpack_css_module_loader_object.jpeg)

Verifying what the CSS Module Loader Object contains. These classes are unique, so no styling conflicts will occur with other `.css` or `.module.css` files.

### Using IDs in `.module.css` files

We have the ability to use not only CSS classes but IDs as well in modular css files.

Separate CSS module loader objects are generated for classes and IDs, so make sure that you use `className` and `id` attributes consciously. 

The regular `.` operator is used to access a specific CSS class or ID in both cases, because they are objects in both cases.

For the following `.css` file, named `Welcome.module.css`:

```css
.div{
    text-align: left;
}

#div {
    text-align: right;
}
```


```js
import WelcomeStyles from './Welcome.module.css'

console.log(WelcomeStyles);

function Welcome() {
  return (
    <div>
      {/* <div className={`${WelcomeStyles.div}`}>Welcome</div> */}
      <div className={`${WelcomeStyles.div}`}>Welcome</div>
      <div id={`${WelcomeStyles.div}`}>Welcome</div>
    </div>
  )
}
```

Take a look at [this](https://www.triplet.fi/blog/practical-guide-to-react-and-css-modules/) practical guide on CSS modules for a more in-depth understanding.

---

# Reconciliation 

<h3>Does using <code>root.render()</code> to render elements overrwrite the pre-existing content within <code>root</code>?</h3>

---

In React, the `root.render()` method is used to render a React component to a specific DOM node. When you call `root.render()`, React will compare the virtual DOM (a representation of the component tree in memory) with the actual DOM, and make any necessary updates to the actual DOM to make it match the virtual DOM.

If the DOM node that you're rendering to is empty (i.e., it doesn't have any children), then `root.render()` will simply append the newly-rendered content to the node. However, if the DOM node already has children, React will update the existing content as needed. This is known as ***reconcilation***.

React will only update the parts of the DOM that have changed, in order to minimize the amount of work that needs to be done. For example, if you update the text inside a `<p>` element, React will only update the text of that element, and not the entire element itself. This helps to make React efficient and fast when updating the user interface.

When you use React, you should not manually update the actual DOM yourself. Instead, you should let React handle updates for you by calling `root.render()` and let it handle the diffing and re-rendering of your components.


---

# Terminologies in React

## `props` 

`props` are a way to pass data between components. They look like HTML attributes when you send them, and arrive as an object in the form of `this.props`.

```js
function MyComponent(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Address: {props.address}</p>
    </div>
  );
}
```

### Destructuring `props`

Destructuring props allows you to extract specific properties from the `props` object passed to a component and assign them to separate variables. This can make the component's code more readable and concise.

Here's an example of how destructuring can be used in a functional component:

```js
function MyComponent({ name, age, address }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Address: {address}</p>
    </div>
  );
}
```

In this example, the component receives three props: `name`, `age`, and `address`. Instead of accessing the props using the dot notation (e.g. `props.name`), the component uses destructuring to extract the values of these props and assigns them to separate variables.

### Default values for props, along with destructuring

```js
function MyComponent({ 
  name = "Rohan", 
  age = 25, 
  address = "India" 
  }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Address: {address}</p>
    </div>
  );
}
```

In this example, if the `name`, `age` and `address` prop are not passed to `MyComponent` for the purpose of creating an element; the values Rohan, 25 and India will be used.

---

## `refs` 

`refs` are how you snag data out of the form element we created.

## `keys` 

a way to uniquely identify a component when it’s repeated. We’re repeating comments here (there can be multiple comments), so if we were to have functionality that could change any of them, having a key is what makes React efficient (it can just replace that single comment instead of all of themcreating grid design css
- ).

# Converting a Function to a Class

A functional component can be converted to class form by following these steps:

1. Create an ES6 class, with the same name, that extends `React.Component`.
2. Add a single empty method to it called `render()`.
3. Move the body of the function into the `render()` method.
4. Replace props with `this.props` in the `render()` body; where `this` points to the object instance of the class being created currently.
5. Delete the remaining empty function.

Functional form of a component:
```js
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

Component in the form of a class:
```js
class Clock extends React.Component {
  // We need not pass `prop` to the `render()` method of this class.
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>

        {/* We can access `props` using the `this` keyword which refers to the current instance of the class being rendered */}
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

Check out edge bookmarks for more details.

# State

## Difference between `setState()` and `useState()`

Both `setState()` and `useState()` are used to update the state of a React component, but they have some key differences:

---

1. `setState()` is a method that is used to update the state of a ***class-based component***. 

    It is called on the component instance, and it takes an *object* or a *function* as an argument. The *object* or *function* passed to `setState()` will be merged with the current state, and the component will re-render with the updated state.

2. `useState()`, on the other hand, is a Hook that allows you to add state to a ***functional component***. 

    It is called at the top level of your component, and it takes an *initial state value* as an argument. 
    
    It returns an array with two elements: 
    - the current state, and; 
    - a function that can be used to update the state. 
   
  You can call `useState()` multiple times to have multiple state variables.

---

Another key difference between the two is that:

-  `setState()` is an ***asynchronous operation*** and the state updates are batched together for performance reasons. 

- `useState()` updates are ***synchronous***, the state updates are immediately reflected in the component re-render.

> ***Note***: `setState()` is only available for class-based components and `useState()` is only for functional components.
>
> But, both of these can be used to create state variables whose next value is dependent on their current value. This is done by passing callbacks in a specific format.
>
> Check out the implementation in the example usages of [`setState()`](#code-snippet-demonstrating-usage-of-setstate) and [`useState()`](#code-snippet-demonstrating-usage-of-usestate).

## Code-snippet demonstrating usage of `setState()`

In this, the next state is dependent on the current state, which is implemented by passing a callback to `setState()`.

```js
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
```

In a class-based React component, the `setState()` method is a method of the component instance/rendered-element, and it should be called on `this`, the current instance of the component.

That is the reason why you have to use `this.setState()` instead of just `setState()`; because `this` refers to the current instance of the component, and `setState()` is a method that is defined on the instance. Upon calling it, only that specific instance will be updated.

If you were to call `setState()` without the `this` keyword, it would not refer to the `setState()` method that is defined on the component instance and it would throw an error.

## Code-snippet demonstrating usage of `useState()`

1. In this, the next state is partially dependent on the current state (only in the case of the `count` state variable), which is implemented by passing a callback to `setCount()`.

    - The argument of the callback is the value of the `count` variable in the *current state*. 
    
    - The return value of the callback is the value of the `count` variable in the *new state*.

2. The `name` variable is not so the call to `setName()` is performed as usual.

```js
import React from "react";
import { useState } from "react"; // Since this is a named import, we can use this method directly using its name. Otherwise, we would have had to use React.useState()

function FunctionalStatefulComp() {

    // De-structuring assignment
    const [count, setCount] = useState(0);
    const [name, setName] = useState("John"); 

    return (<div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(prevCount) => (prevCount + 1)}>Increment count</button>

        <p>Name: {name}</p>
        <button onClick={() => setName("Jane")}>Change name</button>
    </div>)
}

export default FunctionalStatefulComp;
```

In this example, `useState(0)` is called at the top level of the component to initialize the state with a value of 0. It returns an array with two elements: the current state, count and a function setCount that can be used to update the state.

The component renders a `<p>` tag that displays the current count, and a button that increments the count when clicked. 

When the button is clicked, the component instance calls the `setCount(count + 1)` function to update the state and re-renders the component with the new state.

> ***Note***: 
> 1. As the `count` and `name` variables are declared as `const`, they cannot be reassigned to new values, stored at different memory locations.
> 
>     The functions assigned for updating them (`setCount` and `setName` respectively) update the value of the state variable, but they do not *reassign* the variable to a new value. 
>
>     They update the value of the variable *in-place*, so the variable remains pointing to the same memory location.
>     
>     However, this is NOT possible to do manually using regular JS syntax. Strings and numbers can only be re-assigned to new values, which is why `const` primitives cannot be updated manually.
>
> 2. The `useState()` hook can be used multiple times to manage multiple state variables.

---

# Conditional Rendering 

## Using Short-Circuit Operators

In React, we can use JS short-circuit operators to conditionally render elements based on a condition. 

The short-circuit operators `&&` and `||` can be used to check if a condition is `true` or `false`, and to render different elements accordingly.

---

### `&&` operator

It is used to check if a condition is `true`, and if it is, it will render the element that follows it. 
    
If the condition is `false`, the second expression won't be evaluated because 1 `false` statement in the case of AND leads to rejection of the combined condition. 
  
Hence, the element will not be rendered and nothing will be displayed in its place.

### `||` operator 

It works in a similar way to the `&&` operator, but it will render the element following it if the condition is `false`.

  If the condition in `true`, the second expression won't be evaluated because 1 `true` statement in the case of OR leads to accepting of the combined condition.

  Hence, the element will not be rendered and nothing will be displayed in its place.

---

Take a look at this code-snippet which uses both the short-circuit operators:

```js
import React from 'react';

class ConditionalRendering extends React.Component {
    constructor(pops) {
        super(pops);
        this.state = {isLoggedIn : false};
    }

    handleLoginClick = () => {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick = () => {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        return(
            <div>
                {/* If user is logged out, we need to show the login button */}
                {isLoggedIn || <LoginButton onClick={this.handleLoginClick} />}

                {/* If user is already logged in, we need to show the logout button */}
                {isLoggedIn && <LogoutButton onClick={this.handleLogoutClick} />}
            </div>
        )
    }
}

export default ConditionalRendering;
```

## Using if-else or ternary operators

Although the syntax for short-circuit operators is more compact, using traditional methods such as if-else or ternary operators leads to more comprehendable code in the case of more complex conditions.

Take a look at this code-snippet using if-else, for conditional rendering:
```js
import React from 'react';

import LoginButton from "../Components/ConditionalLoginComp";
import LogoutButton from "../Components/ConditionalLogoutComp";

class ConditionalRendering extends React.Component {
    constructor(pops) {
        super(pops);
        this.state = {isLoggedIn : false};
    }

    handleLoginClick = () => {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick = () => {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        
        /* If user is already logged in, we need to show the logout button */
        if(isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }
        /* If user is logged out, we need to show the login button */
        else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return(
            <div>
                {button}
            </div>
        )
    }
}

export default ConditionalRendering;
```

Take a look at this code-snippet using ternary operator, for conditional rendering:

```js
import React from 'react';

import LoginButton from "../Components/ConditionalLoginComp";
import LogoutButton from "../Components/ConditionalLogoutComp";

class ConditionalRendering extends React.Component {
    constructor(pops) {
        super(pops);
        this.state = {isLoggedIn : false};
    }

    handleLoginClick = () => {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick = () => {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        const logoutButton = <LogoutButton onClick={this.handleLogoutClick} />;
        const loginButton = <LoginButton onClick={this.handleLoginClick} />;

        return(
            <div>
                {/* If the use is already logged in, we need to show logout button, else we need to show login button. */}
                {isLoggedIn? logoutButton : loginButton}
            </div>
        )
    }
}

export default ConditionalRendering;
```

---

# React best-practices & lingo

## Is it ok to use conditional statements inside the `render()` method?

- It is generally recommended to avoid adding conditional statements inside the `render()` method of class-based React components. 

  The reason is that the `render()` method should be a ***pure function*** that returns the same output for the same input, and adding conditional statements to it can make it *unpredictable* and *potentially cause performance issues*.

- When you have conditional statements inside the `render()` method, it can make the component re-render multiple times when the state or props change, even if the output of the render() method would be the same. 
  
  This can lead to unnecessary re-renders and can make the application less performant.

- Instead of adding conditional statements inside the `render()` method, you should move the conditionals outside of the `render()` method and use them to determine which elements to render. 
  
  Then you can use the result of the conditionals to return the appropriate JSX elements.

Here is an example of how you can use conditional statements outside of the `render()` method to determine which elements to render:

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: true,
    };
  }

  toggleComponent = () => {
    this.setState(prevState => ({
      showComponent: !prevState.showComponent
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleComponent}>Toggle Component</button>
        {this.state.showComponent && <ComponentToRender />}
      </div>
    );
  }
}
```

In this example, the `render()` method returns a button that, when clicked, will toggle the state of `showComponent`, and based on that state, it will render the `ComponentToRender` or not. 

This way, the component only re-renders when the state changes, and not multiple times based on the conditionals inside the `render()` method.

## Should we use the `document` browser API within React components?

It's generally not recommended to use the `document` browser API within React components, because it can make the component less predictable and harder to test.

- React is designed to work with a virtual DOM, which abstracts away the actual DOM and updates it efficiently. 

  When you use the `document` browser API, you're bypassing React's virtual DOM and directly manipulating the actual DOM. This can cause inconsistencies between the virtual and actual DOMs and make the component less predictable.

- Additionally, when you use the `document` browser API, it can make the component harder to test because you're now testing both the component and the browser API, and it can also make it harder to debug issues because it's not clear whether the problem is with the component or the browser API.

- Instead of using the document browser API, you should try to use React's built-in features to handle the same functionality, such as using the `ref` system to interact with a specific DOM node or using the `useEffect` hook to attach event listeners.

> Note: In cases when you need to use the `document` browser API, it's recommended to use it in a top-level component, such as a component that wraps your entire application, or in a utility function that's not part of a component.

## What is meaning of *prop coming from above*?

When a parent component renders a child component, it can pass data to the child component through `props`. The child component can then use this data to render itself or to determine its behavior.

The phrase *"prop coming from above"* typically refers to the fact that the `prop` is being passed down from a higher-level component to a lower-level component. It means that the value of the `prop` is coming from the parent component, or even a grandparent component, rather than being defined within the component itself.

Here's an example of a parent component passing a prop to a child component:
```jsx
// Parent component
function Parent() {
  return <Child name="John" />;
}

// Child component
function Child({ name }) {
  return <p>Hello, {name}!</p>;
}
```

In this example, the Parent component is passing the name prop to the Child component. The Child component then uses this prop to render a greeting message. The name prop is coming from above, as it is passed down from the Parent component to the Child component.

> ***Note***: The component that receives `props`, should not modify them. They should be treated as *read-only* values. 
> 
> If you want to update the value of a prop, you should do it by calling a callback function passed as a prop from the parent component, this way you are not modifying the value of the prop, you are passing the new value to the parent component, and the parent component will decide what to do with it.
>
> For example:
> ```jsx
> // Parent component
> function Parent() {
>   const [name, setName] = useState("John");
>  
>   const handleNameChange = (newName) => {
>     setName(newName);
>   }
>   return <Child name={name} onNameChange={handleNameChange} />;
> }
>
> // Child component
> function Child({ name, onNameChange }) {
>   return (
>     <>
>       <p>Hello, {name}!</p>
>       <button onClick={() => onNameChange("Jane")}>Change name</button>
>     </>
>   );
> }
> ```
>
> In this example, the `Parent` component has a state variable name with an initial value of `"John"`. It also has a callback function `handleNameChange` which updates the value of the name state variable. This callback function is passed as a prop `onNameChange` to the Child component.
> 
> The `Child` component receives the `name` prop and the `onNameChange` prop, it renders the name, and it also has a button. 
> 
> When the button is clicked, the `onNameChange` callback function is called and it passes the new name `"Jane"` as an argument.
> 
> The `handleNameChange` callback function gets called and updates the name state variable with the new value `"Jane"` using `setName` hook.
> 
> This way, the value of the `name` prop is updated in the `Parent` component, and the `Child` component re-renders with the updated value.

It's worth mentioning that, in this example, the component that receives the callback function does not know what happens inside the function, it just knows that when it is called, it should update the value of the prop.

---

# See Edge bookmarks for more resources

# Important Concepts

## Are the `node_modules` that we use for local development, also used in browser?

When building a web application, it is common to use JavaScript libraries and frameworks that are installed using package managers such as `npm` or `yarn`. 

These libraries and frameworks are typically installed into the `node_modules` directory in the project's root directory.

Browsers, however, do not have the capability to directly interpret or execute code from the `node_modules` directory. 

This means that if you want to use code from a library or framework that is installed in `node_modules`, you need to take some additional steps to make it available to the browser.

There are a few different ways to make the code from `node_modules` available to the browser, such as:

1. Using a bundler such as ***webpack*** or ***Parcel*** to package the code from `node_modules` along with your application's code into a single bundle that the browser can understand.

2. Making a reference to the built/compiled version of the library on a CDN, these are pre-built versions of the library that can be referenced directly in the browser.

3. Using an import map, which is a JSON file that allows to map the package names to the URL where the package can be found.
  
These additional steps are necessary to make the code from `node_modules` available to the browser, because the browser doesn't have the capability to understand the code from the `node_modules` directory and also it's not designed to work with the native format of modules in JavaScript.

It's worth noting that, depending on the complexity of the application, the approach of using a bundler, a CDN or import maps will change. 

And it's also important to ensure that the browser that the app will be loaded on, supports the version of the library you're using.

## Configuring React build process

There are several different ways to configure the build process for a React application, depending on your specific requirements and the tools you are using. However, the most common way is to use a JavaScript bundler such as Webpack, Parcel or Browserify.

Here is an example of how to configure Webpack for a React application:

1. Install the necessary dependencies:
```npm
npm install webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev

```

2. Create a `webpack.config.js` file in the root of your project. Add the following basic configuration to your `webpack.config.js` file:

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
```

## `--isolatedModules` error in React, when using TypeScript

The `--isolatedModules` error in React is related to the TypeScript compiler. This error occurs when the TypeScript compiler is unable to find a specific module that is being imported.

The issue can be fixed by importing any module, because this tells the TypeScript compiler that the current file should be treated as a module and not as a script.

In particular, it happens when the file does not have any exports, then `--isolatedModules` flag will break it, because it will consider it as a script. By adding import statement it tells TS compiler that this is actually a module and we have to treat it differently.

As a best practice is to have at least one import statement in your file, even if the imported module is not actually used in the file. This helps to avoid the `--isolatedModules` error and ensure that your TypeScript code is correctly transpiled to JavaScript.

### Using `import` and `export` keywords to fix the error

In TypeScript, you can add an empty import statement by using the `import` keyword, followed by a set of curly braces `{}` and a semicolon `;` at the end.

```js
import {};
```

You can also specify a name for the import, even though it's not going to be used, this makes it clear for the readers that the `import` statement is being used just to indicate that the current file should be treated as a module and not as a script.

```js
import { dummy } from "dummy-module";
```

Similarly, you can add an empty export statement by using the `export` keyword, followed by a set of curly braces `{}` and a semicolon `;` at the end.

```js
export {};
```

You can also specify a name for the export, it can make more sense depending on the context of the usage.

```js
export const dummy = {};
```

> ***Note***: 
> - When you use `import` statement, it tells the compiler that this file is going to consume something from other module and it should treat the file as a module.
>
> - When you use `export` statement, it tells the compiler that this file is going to expose something that could be used by other files and it should treat the file as a script.
>
> - When you use both `import` and `export` statement in a single file, it tells the compiler that this file is both a module and a script. 
> 
>   This file is going to consume something from other module and it's also going to expose something that could be used by other files.
> 
>   ```js
>   export {};
>   import {} from "dummy-module";
>   ```
>
> It's important to note that this approach should only be used as a temporary solution while you're working on your code, and it's considered as a best practice to have meaningful exports and imports in your codebase.


## Server Side Rendering 

Server-side rendering (SSR) is the process of rendering a React application on the server and sending the fully-rendered HTML to the client. This can provide a number of benefits, such as:

### 1. Improved SEO

Search engines can easily crawl and index the fully-rendered HTML, making it easier for users to find your website.

### 2. Faster initial load time

With SSR, the initial HTML is already loaded on the page, so the browser can start rendering the page immediately, which can make the initial load time faster.

### 3. Better user experience for slow internet connection

By sending a fully-rendered page, the user can start interacting with the page even before the JavaScript has loaded, improving the user experience for users on slow internet connections.

---

### Setting up SSR

There are a few libraries that can help you to set up SSR for your React application. 

One of the most popular libraries is `Next.js`. 

`Next.js` is a framework that allows you to easily set up SSR for your React application. It provides a simple way to organize your code and handle routing, while also providing a development server that automatically handles SSR for you. 

You can also use other popular libraries like `Razzle` or `after.js`.

Setting up SSR can be a bit more complex than setting up a traditional client-side React application, as you'll need to handle rendering on the server as well as on the client. 

However, with the help of these libraries, it can be much easier to set up SSR for your application.

When it comes to implementation, the first thing to do is to run the React application on the server and render the initial HTML on the server-side. This initial HTML can be returned to the browser and rendered. After the page has been loaded, React takes over and renders the page client-side. 

This process of rendering on the server and client side is called ***"isomorphic rendering"*** or ***"universal rendering"***.

It's worth noting that, if your application does not need the benefits mentioned above, you may not need SSR, then you can just render your application on client side.

---

### Downsides of SSR

Every request leads to a new page being re-rendered from the server to the browser. 

This means all the scripts, styles, and templates will be reloaded on the browser each time a request is sent to the server, resulting in a poor user experience.

### Overcoming the downsides of SSR

There are a few different ways to prevent every request from re-downloading resources such as stylesheets and templates of an SSR application:

#### 1. Use caching

One of the simplest ways to prevent resources from being re-downloaded is to use caching. By caching resources such as stylesheets and templates, the server can return the cached version of the resource instead of re-downloading it on every request. This can be done by adding appropriate headers to the response, such as Cache-Control or Expires headers. Some server-side frameworks or http servers have built-in caching features.

#### 2. Use a Content Delivery Network (CDN)

Another way to prevent resources from being re-downloaded is to use a Content Delivery Network (CDN). A CDN is a network of servers that are distributed around the world, and it's used to deliver content to users based on their geographic location. By using a CDN, resources such as stylesheets and templates can be cached at the edge of the network, so they are delivered to users faster and with less load on the origin server.

#### 3. Use long term caching

A modern way to prevent resources from being re-downloaded is to use long-term caching. This is a technique in which assets are given a unique name or hash based on its contents, so when the contents of the file are updated, the name or the hash would change. This way, the browser would detect that the file is different and download it again, but if the file stays the same, the browser would use the cached version and prevent the request.

#### 4. Use the browser storage

Another way to prevent resources from being redownloaded on each request is to use the browser storage, such as `localStorage` or `indexedDB` storage. 

By storing the resources in the browser storage after the first request, it prevents the resources from being re-downloaded on each request.

---

#### Some caveats with these optimizations

It's worth noting that some of the aforementioned methods may not work with all types of resources, and different methods may work better depending on the specific use case. 

It's also important to consider:
- How caching and long-term caching will interact with deployment of new versions of the app and; 
- To have a way to expire the caches on a controlled basis.