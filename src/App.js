
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./components/About";
// // import Home from "./components/Home";
// // import Navbar from "./components/Navbar";
// import NoteState from "./context/notes/NoteState";
// import { Alert }from "./components/Alert";
// function App() {
//   return (
//     <>
//       <NoteState>
//         <Router>
//           <Navbar />
//           <Alert message="This is App for you"></Alert>
//           <div className="container">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route exact path="/about" element={<About />} />
//             </Routes>
//           </div>
//         </Router>
//       </NoteState>
//     </>
//   );
// }

// export default App;
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
}from "react-router-dom"

import Navbar from './components/Navbar';
import  Home  from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import  Alert  from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';
import EmailSend from './components/EmailSend';
import Addpdf from './components/Addpdf'
import Speech from './components/Speech'
import Calculator from './components/Calculator'
import Clock from './components/Clock';
function App() {
  const [alert, setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  } 

  return (
    <>
    
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
         
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert}/>}>
                
              </Route>
              <Route exact path="/about" element={<About />}>
              </Route>
              <Route exact path="/login" element={<Login  showAlert={showAlert}/>}>
              </Route>
              <Route exact path="/signup" element={<Signup  showAlert={showAlert}/>}>
                
              </Route>
              <Route exact path="/emailsend" element={<EmailSend  showAlert={showAlert}/>}>
                
                </Route>
                
              <Route exact path="/addpdf" element={<Addpdf  showAlert={showAlert}/>}>
                
                </Route>
                <Route exact path="/speech" element={<Speech  showAlert={showAlert}/>}>
                
                
                </Route>
                <Route exact path="/calculator" element={<Calculator  showAlert={showAlert}/>}>
                
                
                </Route>
                <Route exact path="/clock" element={<Clock  showAlert={showAlert}/>}>
                
                
                </Route>
            </Routes>
         
            </Router>
      </NoteState>
    </>
  );
}

export default App;

