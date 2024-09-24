import './App.css';
 import{
   BrowserRouter as Router,
   Routes,
   Route
 } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';
import Yournotes from './components/Yournotes';


function App() {
  const [alert, setAlert]= useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      typ:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 3000);
  }

  const myStyle = {
    backgroundImage: `url(${
        process.env.PUBLIC_URL + "./background.jpg"
    })`,
    height: "130vh",
    marginTop: "0px",
    fontSize: "20px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
};
  return (
    <div>
<NoteState  style={myStyle}>

     <Router>
     <Navbar  style={myStyle}/>
     <Alert Alert={alert}/>
     <div className="container"  style={myStyle}>
    <Routes>
          <Route exact path="/" element={<Home showAlert={showAlert} />}></Route>
          <Route exact path="/about"  element={<About/>}> </Route> 
          <Route exact path="/yournotes"  element={<Yournotes  showAlert={showAlert}/>}> </Route> 
          <Route exact path="/login"  element={<Login showAlert={showAlert}/>}> </Route> 
          <Route exact path="/signup"  element={<Signup showAlert={showAlert}/>}> </Route> 
        </Routes>
        </div>
    </Router>
    </NoteState>
    </div>
  );
} 
export default App;
