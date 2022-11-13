import logo from './logo.svg';

import NavBar from './components/Navbar'
import Footer from './components/Footer';
import Home from './Home';
import PlaceToStay from './Placestostay'
import Modal from './components/Modal'

import { Route, Routes } from 'react-router-dom'
import { useState } from "react";



function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">

     <NavBar />

        <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/Placestostay' element= {<PlaceToStay/>} />
        </Routes>



    <button  onClick={() => setIsOpen(true)}>modal bitch</button>
     <Footer />
     {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
}

export default App;
