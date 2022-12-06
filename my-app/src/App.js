import logo from './logo.svg';
import AppStyles from './App.module.css';

function App(props) {
  
  return (
    <div className={`${AppStyles.common} ` 
    +  (props.lightthemebinary ? `${AppStyles.lighttheme}` : `${AppStyles.darktheme}`) }>
      hehehehehehehehhe
    </div>
  )
  
  // return ( 
  // <div className={`${AppStyles.app}`}>
  //   <header className={`${AppStyles.appheader}`}>
  //     <img src={logo} className={`${AppStyles.applogo}`} alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
  // )
}

export default App;
