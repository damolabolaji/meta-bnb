
import Heroimage from './images/hero-image.png'


const Home = () => {
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

            <img src={Heroimage} alt="" />

        </section>
     );
}
 
export default Home;