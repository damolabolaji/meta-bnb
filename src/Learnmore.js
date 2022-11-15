
import Pic1 from './images/learnmore.png'



const LearnMore = () => {
    return ( 

        <div className='learnmore'>
            <section>

                <div className='.intro'>
                    <h2>Metabnb NFTs</h2>

                    <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>

                    <a href="" className='btn learnmore-btn'>Learn More</a>

                </div>

                <div className="images">
                    <img src={Pic1} alt="" className='pic1'/>
                  
                </div>

            </section>

        </div>
        
     );
}
 
export default LearnMore;