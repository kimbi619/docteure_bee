import './App.css';
import { useEffect } from 'react';
import { Client } from './Client';
import Main from './Components/Main/Main';
import Nav from './Components/Nav/Nav';
import Register from './Components/Registration/Register';



function App() {


  useEffect(() => {
    console.log("component mounted");
    // return () => {
    //   cleanup
    // }
  }, [Main]);

  
  return (
    <div className="App">
      <Nav />
      <Main />
      {/* <Register /> */}
    </div>
  );
}

export default App;
