import logo from './logo.svg';

import NavBar from './components/Navbar'
import Footer from './components/Footer';
import Home from './Home';
import PlaceToStay from './Placestostay'


import { Route, Routes } from 'react-router-dom'



function App() {
  return (
    <div className="App">

     <NavBar />

        <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/Placestostay' element= {<PlaceToStay/>} />
        </Routes>



    
     <Footer />

    </div>
  );
}

export default App;
