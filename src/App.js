import logo from './logo.svg';

import NavBar from './components/Navbar'
import Footer from './components/Footer';
import Home from './Home';
import PlaceToStay from './Placestostay'
import Modal from './components/Modal'

import { Route, Routes } from 'react-router-dom'
import { useState } from "react";



function App() {
 

  return (
    <div className="App">
      <div>
         <NavBar />
        
      </div>
    
     
        <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/Placestostay' element= {<PlaceToStay/>} />
        </Routes>



  
     <Footer />

    </div>
  );
}

export default App;
