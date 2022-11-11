import Facebook from '../images/logos/facebook-icon.png';
import IG from '../images/logos/instagram-icon.png';
import Twitter from '../images/logos/twitter-icon.png';

import MetaLogoWhite from '../images/logos/meta-bnb-white-logo.svg';


const Footer = () => {
    return (  
        <footer>
            <section>
                <div className='company-details'>
                    <img src={MetaLogoWhite} alt="Metabnb logo" className='footer-logo' />
                    <div className="socials">
                        <i><img src={Facebook} alt="facebook logo" /></i>
                        <i><img src={IG} alt="facebook logo" /></i>
                        <i><img src={Twitter} alt="facebook logo" /></i>
                    </div>

                </div>

                <div className='footer-col'>
                    <div>
                        <h3>Community</h3>
                        <ul>
                            <li><a href="">NFT</a></li>
                            <li><a href="">Tokens</a></li>
                            <li><a href="">Landlords</a></li>
                            <li><a href="">Discord</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Places</h3>
                        <ul>
                            <li><a href="">Castle</a></li>
                            <li><a href="">Farms</a></li>
                            <li><a href="">Beach</a></li>
                            <li><a href="">Learn More</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3>About us</h3>
                        <ul>
                            <li><a href="">Road map</a></li>
                            <li><a href="">Creators</a></li>
                            <li><a href="">Career</a></li>
                            <li><a href="">Contact us</a></li>
                        </ul>
                    </div>
                </div>
            </section>
            
            <h4><span>&copy;</span>2022 Metabnb</h4>

        </footer>
    );
}
 
export default Footer;