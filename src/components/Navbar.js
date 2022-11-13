

//logo gradient DC3E88, B840AE, 843FE8

import { Link, Route, Routes } from 'react-router-dom';
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


import Home from '../Home';
import PlaceToStay from '../Placestostay'
import Modal from './Modal'

import MetaLogo from "../images/logos/meta-logo-color.png";



const NavBar = () => {

    const navRef = useRef();
    const [isOpen, setIsOpen] = useState(false)

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    return ( 
        
         <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/Placestostay' element= {<PlaceToStay/>} />
        </Routes> ,

        <nav className='main-nav'>


            <Link to="/">
            <img src={MetaLogo} alt="meta logo" />
            </Link>
  

            <ul ref={navRef}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Placestostay">Places to Stay</Link></li>
                <li><a href="">NFTs</a></li>
                <li><a href="">Community</a></li>
                <Link to="/" className="btn connect-btn" onClick={() => setIsOpen(true)}>Connect Wallet</Link>
                <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
            </ul>

         

            <button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </nav>
     );
}
 
export default NavBar;