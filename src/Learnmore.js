import Pic1 from './images/learns3.png'
import Pic2 from './images/learns4.png'
import Pic3 from './images/learnsusan.png'



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
                    <img src={Pic2} alt="" className='pic2'/>
                    <img src={Pic3} alt="" className='pic3'/>
                </div>

            </section>

        </div>
        
     );
}
 
export default LearnMore;