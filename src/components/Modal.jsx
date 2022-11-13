import React from "react";
import styles from "./Modal.module.css";
import { FaGreaterThan, FaTimes,  } from "react-icons/fa";

import MetaMask from "../images/icons/metamask.png"; 
import Wallet from "../images/icons/wallet.png"; 



const Modal = ({ setIsOpen }) => {
    return ( 
        <div className={styles.darkBG} onClick={() => setIsOpen(false)}>

            <div className={styles.centered}>
                
                    <div className={styles.modal}>
                  

                        <div className={styles.modalHeader}>
                            <h1 className={styles.heading}>Connect Wallet</h1>
                            <i className={styles.closeBtn} onClick={() => setIsOpen(false)}> <FaTimes /></i>
                        </div>

                        <div className={styles.modalContents}>

                            <p  className={styles.paragraph}>Choose your preferred wallet:</p>

                            <div className={styles.options}>
                                <img src={MetaMask} alt="metamask logo"  className={styles.walletLogo}/>
                                <h3 className={styles.walletType}>Metamask</h3>
                                <i className={styles.walletIcon}> <FaGreaterThan /></i>
                            </div>

                            <div className={styles.options}>
                                <img src={Wallet} alt="wallet logo"  className={styles.walletLogo} />
                                <h3 className={styles.walletType}>WalletConnect</h3>
                                <i className={styles.walletIcon}> <FaGreaterThan /></i>
                            </div>

                        </div>
                     </div>


                
            </div>


        </div>


     );
}
 
export default Modal;