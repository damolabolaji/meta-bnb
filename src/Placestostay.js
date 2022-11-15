
import AllPlaces from "./AllPlaces";
import { useRef } from "react";
import SettIcon from './images/icons/setting.png'

import { FaArrowDown, FaArrowUp } from "react-icons/fa";




const PlaceToStay = () => {

    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    return ( 
       
        <div>
           <nav className="seconday-nav">
                <ul ref={navRef}>
                    <li><a href="">Restaurant</a></li>
                    <li><a href="">Cottage</a></li>
                    <li><a href="">Castle</a></li>
                    <li><a href="">fantasy city</a></li>
                    <li><a href="">beach</a></li>
                    <li><a href="">Cabins</a></li>
                    <li><a href="">Off-grid</a></li>
                    <li><a href="">Farm</a></li>
                    <FaArrowUp onClick={showNavbar} className="nav-close-btn"/> 
                </ul>



                <button className="nav-btn" onClick={showNavbar}>
                    Choose Selection <FaArrowDown/> 
                
                </button>


                <button className="btn" >
                    location <img src={SettIcon} alt="" /> 
                </button>
           </nav>

           <section className="featured">
            

            <div className="featured-places">
                <AllPlaces/>
                
 
            </div>
        </section>
        </div>
     );
}
 
export default PlaceToStay;