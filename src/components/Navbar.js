

//logo gradient DC3E88, B840AE, 843FE8

import { Link, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import PlaceToStay from '../Placestostay'
import MetaLogo from "../images/logos/meta-logo-color.png";

const NavBar = () => {
    return ( 
        
         <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/Placestostay' element= {<PlaceToStay/>} />
        </Routes> ,

        <nav>


            <Link to="/">
            <img src={MetaLogo} alt="meta logo" />
            </Link>
  

            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Placestostay">Places to Stay</Link></li>
                <li><a href="">NFTs</a></li>
                <li><a href="">Community</a></li>
            </ul>

            <Link to="/" className="btn connect-btn">Connect Wallet</Link>
            
        </nav>
     );
}
 
export default NavBar;