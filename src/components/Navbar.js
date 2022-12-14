

//logo gradient DC3E88, B840AE, 843FE8

import React from 'react';

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

    const toOpen = () => {
         setIsOpen(true)
    }

   

    return ( 
        
         <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/Placestostay' element= {<PlaceToStay/>} />
        </Routes> ,

        <nav className='main-nav'>


            <Link to="/">
            <img src={MetaLogo} alt="meta logo" className='logo' />
            </Link>
  

            <ul ref={navRef}>
                <li><Link to="/" onClick={showNavbar}>Home</Link></li>
                <li><Link to="/Placestostay" onClick={showNavbar}>Places to Stay</Link></li>
                <li><a href="/" onClick={showNavbar}>NFTs</a></li>
                <li><a href="/" onClick={showNavbar}>Community</a></li>
                <Link to="/" className="btn connect-btn" onClick={() => {
                    showNavbar();
                    toOpen();
                } }>
                    Connect Wallet</Link>
                <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
            </ul>

         

            <button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
            {isOpen && <Modal modalState={setIsOpen} />}
        </nav>
     );
}
 
export default NavBar;