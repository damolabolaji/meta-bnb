import Hero1 from './images/herosusan.png'
import Hero2 from './images/heros9.png'
import Hero3 from './images/heros2.png'
import Hero4 from './images/herodruid4.png'


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

            <div>
                <img src={Hero1} alt="" />
                <img src={Hero2} alt="" />
            </div>

            <div>
                <img src={Hero3} alt="" />
                <img src={Hero4} alt="" />
            </div>
            
            
        </div>

      

    </section>
     );
}
 
export default Hero;