import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
function App(){
  return(
    <>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/about"  element={<About/>}/>
            <Route path="/contact"  element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

  export default App;

