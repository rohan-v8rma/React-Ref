import AppStyles from './App.module.css';
import Clock from './Clock'


// Another way of passing props
function App({lightthemebinary}) {
// function App(props) {
  
  return (
    <Clock />
  )
}

export default App;
