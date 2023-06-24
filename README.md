# INDEX

- [INDEX](#index)
- [TODO](#todo)
- [Updating version of node before `create-react-app`](#updating-version-of-node-before-create-react-app)
- [Creating React Application](#creating-react-application)
- [Importing and Exporting in React](#importing-and-exporting-in-react)
  - [Exporting](#exporting)
    - [Default Exports](#default-exports)
    - [Named Exports](#named-exports)
  - [Importing](#importing)
    - [Using CSS modules in React](#using-css-modules-in-react)
    - [CSS module loader object (TODO: Complete)](#css-module-loader-object-todo-complete)
    - [Using IDs in `.module.css` files](#using-ids-in-modulecss-files)
- [Using CSS Variables in React](#using-css-variables-in-react)
- [Reconciliation \& Updates](#reconciliation--updates)
  - [Taking an example...](#taking-an-example)
  - [And another one...](#and-another-one)
  - [Mapping array elements to React components](#mapping-array-elements-to-react-components)
- [What are `props`?](#what-are-props)
  - [Destructuring `props`](#destructuring-props)
  - [Default values for props, along with destructuring](#default-values-for-props-along-with-destructuring)
  - [Checking prop types and making them required](#checking-prop-types-and-making-them-required)
    - [Why you should type-check props in React](#why-you-should-type-check-props-in-react)
    - [How to use `prop-types` package to type-check props and make them required](#how-to-use-prop-types-package-to-type-check-props-and-make-them-required)
    - [Why is the `prop-types` package a regular-dependency and not a dev-dependency?](#why-is-the-prop-types-package-a-regular-dependency-and-not-a-dev-dependency)
    - [Validating the `children` prop](#validating-the-children-prop)
- [React Refs](#react-refs)
  - [Accessing DOM directly](#accessing-dom-directly)
  - [Storing some state that doesn't trigger re-renders](#storing-some-state-that-doesnt-trigger-re-renders)
  - [Use](#use)
    - [Managing Focus](#managing-focus)
    - [Accessing DOM Elements](#accessing-dom-elements)
    - [Managing Uncontrolled Components](#managing-uncontrolled-components)
- [What are `keys`?](#what-are-keys)
- [Converting a Function to a Class](#converting-a-function-to-a-class)
- [Hooks](#hooks)
  - [Rules of Hooks](#rules-of-hooks)
  - [Need of the `useEffect()` hook](#need-of-the-useeffect-hook)
    - [What is a side-effect?](#what-is-a-side-effect)
    - [Some examples of side-effects](#some-examples-of-side-effects)
    - [Code-snippet without `useEffect()`](#code-snippet-without-useeffect)
    - [Code snippet incorporating `useEffect()`](#code-snippet-incorporating-useeffect)
- [State](#state)
  - [Why can't we just use a local variable in the component instead of a state variable?](#why-cant-we-just-use-a-local-variable-in-the-component-instead-of-a-state-variable)
  - [Is it more costly to store variables whose values can be calculated using props as state or is it more costly to calculate their values upon each re-render?](#is-it-more-costly-to-store-variables-whose-values-can-be-calculated-using-props-as-state-or-is-it-more-costly-to-calculate-their-values-upon-each-re-render)
  - [Difference between `setState()` and `useState()`](#difference-between-setstate-and-usestate)
  - [Code-snippet demonstrating usage of `setState()`](#code-snippet-demonstrating-usage-of-setstate)
  - [Code-snippet demonstrating usage of `useState()`](#code-snippet-demonstrating-usage-of-usestate)
- [React Context](#react-context)
  - [About](#about)
    - [1. Context Provider](#1-context-provider)
    - [2. Context Consumer](#2-context-consumer)
    - [Basic Example](#basic-example)
  - [Uses](#uses)
    - [Authentication](#authentication)
    - [Language or Localization](#language-or-localization)
    - [Preferences or Settings](#preferences-or-settings)
- [React Router](#react-router)
  - [Types of Routers](#types-of-routers)
  - [`useParams()` hook (TODO)](#useparams-hook-todo)
  - [What happens internally when a `<Link>` tag is clicked](#what-happens-internally-when-a-link-tag-is-clicked)
  - [Redirection in React Router](#redirection-in-react-router)
  - [Unable to go back to previous items after re-direction](#unable-to-go-back-to-previous-items-after-re-direction)
    - [The problem](#the-problem)
    - [The solution  (`replace` prop in `<Navigate />` component)](#the-solution--replace-prop-in-navigate--component)
- [Conditional Rendering](#conditional-rendering)
  - [Using Short-Circuit Operators](#using-short-circuit-operators)
    - [`&&` operator](#-operator)
    - [`||` operator](#-operator-1)
  - [Using if-else or ternary operators](#using-if-else-or-ternary-operators)
- [Performance Profiling in React](#performance-profiling-in-react)
- [React best-practices, common errors \& terminology](#react-best-practices-common-errors--terminology)
  - [Is it ok to use conditional statements inside the `render()` method?](#is-it-ok-to-use-conditional-statements-inside-the-render-method)
  - [Should we use the `document` browser API within React components?](#should-we-use-the-document-browser-api-within-react-components)
  - [What is meaning of *prop coming from above*?](#what-is-meaning-of-prop-coming-from-above)
  - [Configuring React build process](#configuring-react-build-process)
  - [`--isolatedModules` error in React, when using TypeScript](#--isolatedmodules-error-in-react-when-using-typescript)
    - [Using `import` and `export` keywords to fix the error](#using-import-and-export-keywords-to-fix-the-error)
- [See Edge bookmarks for more resources](#see-edge-bookmarks-for-more-resources)

# TODO

- call to action
- Welcome.module.css WelcomeStyles.div is an inline style, so it is more powerful than index.css: Figure out why this is

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

Refer this cheatsheet if short on time: https://www.samanthaming.com/tidbits/79-module-cheatsheet/

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

### CSS module loader object (TODO: Complete)

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

# Using CSS Variables in React

Take a look at the `CSSVarTest.js` and `CSSVarTest.module.css` files to understand how to use CSS Variables with React. 

The code snippets are also given below:

`CSSVarTest.js`:
```jsx
import styles from './CSSVarTest.module.css'


export default function TestFunctionComp() {
    return(<div style={// This brace allows writing of js syntax within jsx
        {// This is a JS object that is being passed to the style attribute
            '--backgroundColor':'red',
            '--borderColor':'green'
        }
        }>
        <div className={`${styles.child}`}></div>
        <div className={`${styles.child}`}></div>
        <div className={`${styles.child}`}></div>
        <div className={`${styles.child}`}></div>
    </div>)
}
```

`CSSVarTest.module.css`:
```css
:root {
    --backgroundColor: yellow;
    --borderColor: black;
}

/* 

*/

.child {
    height: 100px;
    width: 100px;
    border: var(--borderColor) 1px solid;
    background-color: var(--backgroundColor);
}
```

- The variables are defined for the root element (using the `:root` selector) meaning all children of the root element will have access to these variable values.
- When we pass other values for these variables to the parent div of the `.child` divs, they override the values specified in the :root selector, making the new values available to the children.

# Reconciliation & Updates

<h3>Does using <code>root.render()</code> to render elements overrwrite the pre-existing content within <code>root</code>?</h3>

---

In React, the `root.render()` method is used to render a React component to a specific DOM node. When you call `root.render()`, React will compare the virtual DOM (a representation of the component tree in memory) with the actual DOM, and make any necessary updates to the actual DOM to make it match the virtual DOM.

If the DOM node that you're rendering to is empty (i.e., it doesn't have any children), then `root.render()` will simply append the newly-rendered content to the node. However, if the DOM node already has children, React will update the existing content as needed. This is known as ***reconcilation***.

React will only update the parts of the DOM that have changed, in order to minimize the amount of work that needs to be done. For example, if you update the text inside a `<p>` element, React will only update the text of that element, and not the entire element itself. This helps to make React efficient and fast when updating the user interface.

When you use React, you should not manually update the actual DOM yourself. Instead, you should let React handle updates for you by calling `root.render()` and let it handle the diffing and re-rendering of your components.

## Taking an example...

***If suppose I have two separate components which are almost the same, except for the background color.***

***Upon combining the components into one, with the background color being colored by a prop, will react's diffing algorithm take less time in switch between the versions of components since only a prop would be being changed instead of the components being changed, or will the performance benefits be marginal?***

React's diffing algorithm, also known as reconciliation, is optimized for efficiently updating the UI by minimizing the number of changes needed to apply the updates. When two components are very similar, except for a few props, merging them into a single component with a prop to specify the background color can potentially improve performance.

In this case, the reconciliation algorithm should be able to detect that only the prop value has changed, and update only the affected parts of the component. This can reduce the number of updates and improve performance compared to having two separate components that are almost identical.

However, the performance benefits of this optimization may vary depending on the specific use case and the size and complexity of the components. It is always a good practice to profile and benchmark your application to ensure that it meets the desired performance requirements.

## And another one...

***If two components are exact same and one instance of the first component is replaced by an instance of the second component, is the react diffing algorithm able to quickly detect that they have the same markup, resulting in no performance losses upon re-render?***

Yes, if two components have the exact same markup, and only their instances are being replaced, React's diffing algorithm will quickly detect that they have the same markup and will not need to perform a full re-render. Instead, it will simply update the state of the existing component to match the new props, resulting in minimal performance losses upon re-render.

## Mapping array elements to React components

```jsx
const arrayElements = ['a', 'b', 'c'];

const mappedComponents = arrayElements.map((element) => <span>{element}</span>);
```

This is the error we face when we directly map an array of elements to React components, similar to what is done above.

```
react-dom.development.js:86  Warning: Encountered two children with the same key, `.0`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted - the behavior is unsupported and could change in a future version.
```

The warning message "Encountered two children with the same key" is a warning provided by React to notify you that you have multiple child components within a parent component that have the same key prop value. In React, the key prop is used to uniquely identify each child component when performing updates.

Each child component in a list or an array rendered by React should have a unique key prop value. This allows React to efficiently update and **reconcile** the DOM when changes occur, such as when items are added, removed, or reordered.

When React encounters multiple child components with the same key value, it can cause unexpected behavior and errors in component rendering and updates. The warning message advises you to ensure that the key prop values for the children are unique to avoid such issues.

To fix this warning, you need to assign a unique key prop value to each child component within the parent component. The key values should ideally be stable and unique identifiers, such as an ID associated with the data or a unique value generated based on the item's index in the array.

```jsx
const arrayElements = ['a', 'b', 'c'];

const mappedComponents = arrayElements.map((element) => (
  <React.Fragment key={uuidv4()}>
    <span>{element}</span>
  </React.Fragment>
));
```

Read more about React fragments and keyed fragments over [here](https://legacy.reactjs.org/docs/fragments.html).

---

# What are `props`?

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

## Destructuring `props`

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

## Default values for props, along with destructuring

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

## Checking prop types and making them required

### Why you should type-check props in React

https://blog.logrocket.com/the-modern-guide-to-react-prop-types/

### How to use `prop-types` package to type-check props and make them required

https://blog.logrocket.com/validate-react-props-proptypes/

Type-checking props OR making props as required results in issuing of warnings in the console when the props are NOT of the appropriate type or are NOT passed to the component.

### Why is the `prop-types` package a regular-dependency and not a dev-dependency?

`prop`-types is a regular dependency rather than a dev dependency because it is used at runtime to validate the props being passed to a component, and provides helpful error messages in case of any mismatch or missing props. 

In other words, it is used for production code as well, rather than development purposes only. 

Therefore, it is necessary to include it in the final production bundle, and not just during development.

### Validating the `children` prop

To validate the children prop in a React component, you can use the `PropTypes.node` property. Here's an example:

```javascript
import PropTypes from 'prop-types';

function MyComponent({ children }) {
  return <div>{children}</div>;
}

MyComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
```
In this example, the PropTypes.node property is used to validate that the children prop is either a React element or a primitive value (like a string or number). The isRequired property is used to ensure that the prop is passed to the component.

---

# React Refs

## Accessing DOM directly

React refs provide a way to access and interact with DOM elements or React components directly. 

They allow you to reference a specific element or component and access its properties or methods.

React refs can be created using the useRef() hook. Once a ref is created, it can be attached to a React element as a JSX attribute, allowing you to access the underlying DOM element or component instance.

But, over-use of refs as a substitute for state management and re-rendering should be avoided being handled manually, allowing React to take care of it.

## Storing some state that doesn't trigger re-renders

- Since local variables in functional components in React are NOT persisted across re-render, we can't use them to store any information that needs to stay with us.
- Changes to state variable values trigger re-renders, so they are NOT suitable when we don't want that to happen.

This is the exact use-case for refs, as a state management tool.

## Use

### Managing Focus

You can use refs to manage focus on specific elements. For example, you can use a ref to automatically focus an input field when a component mounts or when a certain condition is met.

### Accessing DOM Elements

Refs can be used to directly access and manipulate DOM elements. This can be useful when you need to interact with a specific element, such as triggering animations, measuring dimensions, or manually scrolling.

### Managing Uncontrolled Components

In some cases, you might need to work with uncontrolled components, such as HTML form elements that manage their own state. Refs can be used to retrieve values or interact with these uncontrolled components directly.

---

# What are `keys`?

`keys` are a way to uniquely identify a component when it’s repeated. 

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

---

# Hooks

## Rules of Hooks

Refer this link for more information: https://reactjs.org/docs/hooks-rules.html.

Watch this video for more examples: https://www.youtube.com/watch?v=jzrY8fG7HoI

Use the following ESlint plugin to get warnings when these rules are not being met:
```
npm install eslint-plugin-react-hooks --save-dev
```
This is contained within the create-react-app by-defaut.


## Need of the `useEffect()` hook

This hook acts as a replacement for the lifecycle methods in Class-based components (demonstrated with examples in `Class-Stateful-Lifecycle-Comp.js` and `componentDidUpdateTest.js`)

Take a look at the `useEffectTest.js` file for examples with accompanying inline documentation. 

### What is a side-effect?

In general, a side-effect is when a procedure changes a variable from outside its scope i.e., an external event lead to the changing of the value of the variable. 

### Some examples of side-effects

1. Fetching data
    ```js
    fetch('./users').then(() => {})
    ```
2. Setting up timers and intervals
    ```js
    setInterval( () => console.log('timer'), 1000);
    ```
3. Setting up event handlers
    ```js
    document.addEventListener('mouseover', () => {});
    ```

    > ***Note***: Directly attaching event listeners to DOM elements in React is not a good practice. This is just an example.

### Code-snippet without `useEffect()`

In order to understand properly, let us take a look at some code that doesn't contain the `useEffect()` hook.

The ***intended functionality of the component*** was to add themed classes to the `Clock` widget based on the time of day.

```js
import {useState} from 'react'

export default function Clock({ time }) {
  
  const [nightOrDay, setMode] = useState('night');
  
  let hours = time.getHours();
  
  if (hours >= 0 && hours <= 6) {
    setMode('night');
  } else {
    setMode('day');
  }
  
  return (<>
    <h1 className={nightOrDay}>
      {time.toLocaleTimeString()}  
  );
}
```

As mentioned in the React docs [here](https://beta.reactjs.org/reference/react/useState#setstate), the state setter function that is a part of the `useState()` hook triggers a re-render.

In the code above, a call to the state setter function is part of the **synchronous rendering code**, resulting in an *infinite loop of re-renders*.

### Code snippet incorporating `useEffect()`

```js
import {useState} from 'react'

export default function Clock({ time }) {
  
  const [nightOrDay, setMode] = useState('night');
  
  let hours = time.getHours()

  useEffect(() => {
    if (hours <= 6 && nightOrDay === 'day') {
        setMode('night');
    } 
    else if(hours > 6 && nightOrDay === 'night') {
      setMode('day');
    }
  }, [hours])
  
  return (<>
    <h1 className={nightOrDay}>
      {time.toLocaleTimeString()}  
    </h1>
  </>);
}
```
---

# State

To figure out which piece of data is state. Ask three questions about each piece of data:

1. Is it passed in from a parent via props? If so, it probably isn’t state.
2. Does it remain unchanged over time? If so, it probably isn’t state.
3. Can you compute it based on any other state or props in your component? If so, it isn’t state.

## Why can't we just use a local variable in the component instead of a state variable?

See the first example in this link to understand the answer: https://beta.reactjs.org/learn/state-a-components-memory

## Is it more costly to store variables whose values can be calculated using props as state or is it more costly to calculate their values upon each re-render?

Storing variables whose values can be calculated using props as state can be more costly than calculating their values upon each re-render.

The reason for this is that adding unnecessary state to a component can increase the amount of work that React needs to do when rendering and reconciling changes. This can slow down the rendering process and lead to performance issues.

In general, it is best to keep state minimal and calculate values that can be derived from props or other state variables during the rendering process. This can help to optimize performance and ensure that the component is always up-to-date with the latest data.

Read more about it [here](https://beta.reactjs.org/learn/choosing-the-state-structure#avoid-redundant-state).

## Difference between `setState()` and `useState()`

Both `setState()` and `useState()` are used to update the state of a React component, but they have some key differences:

---

1. `setState()` is a method that is used to update the state of a ***class-based component***. 

    It is called on the component instance, and it takes an *object* or a *function* as an argument. The *object* or *function* passed to `setState()` will be merged with the current state, and the component will re-render with the updated state.

2. `useState()`, on the other hand, is a [Hook](#hooks) that allows you to add state to a ***functional component***. 

    It is called at the top level of your component, and it takes an *initial state value* as an argument. 
    
    It returns an array with two elements: 
    - the current state, and; 
    - a function that can be used to update the state. 
   
  You can call `useState()` multiple times to have multiple state variables.

---

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

Read more about the state setter method returned by the `useState` hook here: https://beta.reactjs.org/reference/react/useState#setstate

---

# React Context

## About

React Context is a feature in React that allows you to share data between components without explicitly passing it through props at every level of the component tree. It provides a way to create a global state that can be accessed by any component within its tree.

React Context consists of two main components:

### 1. Context Provider

The Context Provider is responsible for providing the shared data to all the components that need access to it. It acts as the source of truth for the data. The Provider component is placed at a higher level in the component tree to make the data available to its descendants.

### 2. Context Consumer

The Context Consumer is used by components that want to access the shared data provided by the Context Provider. It allows components to subscribe to the context and access the shared data.

### Basic Example

```jsx
// Create a new context
const MyContext = React.createContext();

// Create a provider component
const MyContextProvider = ({ children }) => {
  const sharedData = 'Hello from Context!';

  return (
    <MyContext.Provider value={sharedData}>
      {children}
    </MyContext.Provider>
  );
};

// Consume the context in a component
const MyComponent = () => {
  return (
    <MyContext.Consumer>
      {value => <p>{value}</p>}
    </MyContext.Consumer>
  );
};

// Use the context provider in the app
const App = () => {
  return (
    <MyContextProvider>
      <MyComponent />
    </MyContextProvider>
  );
};
```

## Uses

React Context can be useful in various real-life situations where you need to manage and share state or data across multiple components without explicitly passing props through the component hierarchy. Here are a few examples:

### Authentication

When building an authentication system, you can use React Context to store the authentication state (e.g., logged in user, authentication token) and provide it to all the components that need access to the authentication information. 

This allows components to easily check the authentication status without passing props from the top-level component.

### Language or Localization

If your application supports multiple languages or requires localization, you can use React Context to provide the selected language or localization data to all the components. 

This allows components to access the language-specific content without explicitly passing the language prop through every intermediate component.

### Preferences or Settings

If your application has user preferences or settings that need to be accessed and modified across different parts of the application, React Context can provide a convenient way to manage and share those preferences. 

Components can access and update the preferences without the need for prop drilling.

---

# React Router

## Types of Routers

- BrowserRouter - Used in browser contexts
- MemoryRouter - Used in testing environments when access to browser is not guaranteed, so routing information is stored in memory.
- StaticRouter - Used in 

## `useParams()` hook (TODO)

## What happens internally when a `<Link>` tag is clicked

When a `<Link>` component in React Router is clicked, it internally uses the `history.push()` method to change the URL in the browser's address bar and navigate to the new route.

This method pushes a new entry onto the history stack and triggers a re-render of the React components. The new entry replaces the current URL in the history stack with the new one, which allows the user to use the browser's back and forward buttons to navigate between pages.

Additionally, the `<Link>` component also prevents the default behavior of the `<a>` tag, which is to perform a full page reload when clicked. Instead, it simply updates the URL and renders the appropriate component.

## Redirection in React Router 

- `<Redirect />` is a deprecated method from React Router v5.

- `<Navigate />` is the appropriate method in React Router v6.

Code snippets demonstrating use of `<Navigate />`:
```jsx
<Navigate to="/somewhere/else" />
```
OR
```jsx
<Routes>
  <Route path='/' element={<h1>Home Page Component</h1>} />
  <Route path='/login' element={<h1>Login Page Component</h1>} />
    // New line
  <Route path='*' element={<Navigate to='/' />} />
</Routes>
```

Read more about it here[https://www.copycat.dev/blog/react-router-redirect/].

## Unable to go back to previous items after re-direction

### The problem

Suppose we have a website in React that has multiple routes. Here is the react router setup:
```jsx
<Routes>
  <Route path="/" element={<RootHeaderFooter />}>
    <Route index={true} element={<RootLanding />} />
    <Route path="contact-us" element={<RootContactUs />} />
    <Route path="*" element={<Navigate to="/" />} />
  </Route>

  <Route path="/engineering/" element={<EnggHeaderFooter />}>
    <Route index={true} element={<Navigate to="services" />} />
    <Route path="about-us" element={<EnggAbout />} />
    <Route path="careers" element={<EnggServices />} />
    <Route path="contact-us" element={<EnggContactUs />} />
    <Route path="featured-insights" element={<EnggInsights />} />
    <Route path="services" element={<EnggCareers />} />
    <Route path="*" element={<Navigate to="services" />} />
  </Route>

  <Route path="/technology/" element={<TechHeaderFooter />}>
    <Route index={true} element={<Navigate to="services" />} />
    <Route path="about-us" element={<TechAbout />} />
    <Route path="careers" element={<TechServices />} />
    <Route path="contact-us" element={<TechContactUs />} />
    <Route path="featured-insights" element={<TechInsights />} />
    <Route path="services" element={<TechCareers />} />
    <Route path="*" element={<Navigate to="services" />} />
  </Route>
</Routes>
```

Assume you're navigating using the UI to the intended routes. Subsequently, upon typing in an unintended path like `/engineering/hello`, you get re-directed to `/engineering/services`, which is the intended behavior. 

Now, when you click the back button in the browser, it tries to go back to `/engineering/hello`, which again re-directs to `/engineering/services`. 

In this way, the pages visited before typing in the unintended path cannot be accessed.

Is there some way to remove this unintended path from history before the re-direction occurs using the <Navigate/> element?

### The solution  (`replace` prop in `<Navigate />` component)

You can use the replace prop of the <Navigate> component to replace the current history entry instead of creating a new one. This will ensure that when the user presses the back button, they are taken to the previous valid URL instead of the unintended path.

For example, you can modify your routes like this:

```jsx
<Routes>
  <Route path="/" element={<RootHeaderFooter />}>
    <Route index={true} element={<RootLanding />} />
    <Route path="contact-us" element={<RootContactUs />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Route>

  <Route path="/engineering/" element={<EnggHeaderFooter />}>
    <Route index={true} element={<Navigate to="services" replace />} />
    <Route path="about-us" element={<EnggAbout />} />
    <Route path="careers" element={<EnggServices />} />
    <Route path="contact-us" element={<EnggContactUs />} />
    <Route path="featured-insights" element={<EnggInsights />} />
    <Route path="services" element={<EnggCareers />} />
    <Route path="*" element={<Navigate to="services" replace />} />
  </Route>

  <Route path="/technology/" element={<TechHeaderFooter />}>
    <Route index={true} element={<Navigate to="services" replace />} />
    <Route path="about-us" element={<TechAbout />} />
    <Route path="careers" element={<TechServices />} />
    <Route path="contact-us" element={<TechContactUs />} />
    <Route path="featured-insights" element={<TechInsights />} />
    <Route path="services" element={<TechCareers />} />
    <Route path="*" element={<Navigate to="services" replace />} />
  </Route>
</Routes>
```

Note the replace prop added to the `<Navigate>` component in the `path="*"` routes.

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

# Performance Profiling in React

***How do I go about doing performance profiling?***

Profiling and benchmarking a React application involves measuring its performance metrics such as rendering time, memory usage, and network requests. This can be done using various tools available in the developer's toolkit. Here are some steps to get started:

1. Use the built-in performance tool in your browser's developer tools to measure rendering time and identify performance bottlenecks.

2. Use a tool like Lighthouse or WebPageTest to measure network performance, such as page load times and server response times.

3. Use a memory profiler like the Chrome DevTools Memory panel to measure memory usage and identify potential memory leaks.

4. Use a testing framework like Jest to measure the performance of your unit tests and integration tests.

Consider using a specialized performance testing tool like Apache JMeter or Gatling for load testing your application and identifying its scalability limits.

By analyzing the data collected from these tools, you can identify the areas in your application that need optimization and track the progress of your performance tuning efforts over time.

---

# React best-practices, common errors & terminology

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



# See Edge bookmarks for more resources
