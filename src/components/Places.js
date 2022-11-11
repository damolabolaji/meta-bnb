import Heart from '../images/icons/heart.png';
import Star from '../images/icons/star.png';



const PlacesCard = ({className}) => {
    return (  
        <>
            <div className="card">
                <div>
                    <img src="" alt="" className={className} />
                    <i><img src={Heart} alt="heart icon" /></i>
                </div>

                <div className='nft-details'>
                    <p>Desert king</p>
                    <p>1MBT per night</p>
                </div>
                <div className='nft-details'>
                    <p>2345km away</p>
                    <p>available for 2weeks stay</p>
                </div>
                <div>
                    <img src={Star} alt="rating star" />
                    <img src={Star} alt="rating star" />
                    <img src={Star} alt="rating star" />
                    <img src={Star} alt="rating star" />
                    <img src={Star} alt="rating star" />
                  
                </div>
            </div>
        </>
    );

    // PlacesCard.propTypes = {
    //     className: propTypes.string
    // };
}
 
export default PlacesCard;