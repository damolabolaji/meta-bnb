import PlacesCard from './components/Places';
import classes from './index.css'



const Featured = () => {
    return ( 
        <section className="featured">
            <h2>Inspiration for your next adventure</h2>

            <div className="featured-places">
                <PlacesCard/>
                <PlacesCard/>
                <PlacesCard/>
                <PlacesCard/>
                <PlacesCard/>
                <PlacesCard/>
                <PlacesCard/>
                <PlacesCard/>
 
            </div>
        </section>
     );
}
 
export default Featured;