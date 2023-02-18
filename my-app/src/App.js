import AppStyles from './App.module.css';
import ClassBasedStatefulComp from './Components/ClassBased/Class-Stateful-Lifecycle-Comp';
import ComponentDidUpdateTest from './Components/ClassBased/componentDidUpdateTest';

// Names of React components should start with an uppercase letter.

// Another way of passing props
function App() {
  return (<>
    <ComponentDidUpdateTest />
    </>)
}

export default App;
