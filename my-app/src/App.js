import logo from './logo.svg';
import AppStyles from './App.module.css';


// Another way of passing props
function App({lightthemebinary}) {
// function App(props) {
  
  return (
    <div className={`${AppStyles.common} ` 
    +  (lightthemebinary ? `${AppStyles.lighttheme}` : `${AppStyles.darktheme}`) }>
      hehehehehehehehhe
    </div>
  )
}

export default App;
