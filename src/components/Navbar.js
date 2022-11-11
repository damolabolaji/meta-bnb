

//logo gradient DC3E88, B840AE, 843FE8

import MetaLogo from "../images/logos/meta-logo-color.png";

const NavBar = () => {
    return ( 
        <nav>

            <img src={MetaLogo} alt="" />

            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Place to Stay</a></li>
                <li><a href="">NFTs</a></li>
                <li><a href="">Community</a></li>
            </ul>

            <a href="" className="btn">Connect Wallet</a>
            
        </nav>
     );
}
 
export default NavBar;