
import HeroImage from './images/hero-image.png'


const Hero = () => {
    return ( 
        <section className="hero-section">
        <div className="intro">
            <h1>Rent a <span>Place</span>  away from <span>Home</span> in the <span>Metaverse</span></h1>
            <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>

            <div className="search">
                <input type="text" placeholder='search for location'/>
                <a href="" className='btn search-btn'>Search</a>
            </div>
        </div>

        <div className='hero-image'>

           <img src={HeroImage} alt="" />
            
            
        </div>

      

    </section>
     );
}
 
export default Hero;