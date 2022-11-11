
import mbToken from './images/logos/mb-token-logo.svg'
import metaMask from './images/logos/metamask-full-logo.svg'
import openSea from './images/logos/open-sea-logo.svg'


const Sponsors = () => {
    return (  
       
        <section className='sponsors'>

            <section className='sponsor-logo'>
                <img src={mbToken} alt="" />
                <img src={metaMask} alt="" />
                <img src={openSea} alt="" />

            </section>
          
        </section>
    );
}
 
export default Sponsors;