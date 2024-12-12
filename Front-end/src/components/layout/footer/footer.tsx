import './footer.css'
import '../../../global.css'
import Logo from '../../../assets/audiophile 2.svg'
import { Link } from 'react-router'
import Instagram from '../../../assets/icon-instagram.svg'
import Facebook from '../../../assets/icon-facebook.svg'
import Twitter from '../../../assets/icon-twitter.svg'



function Footer() {
    return (
        <>
            <footer>
                <div className="footer-wrapper">

                    <div className="footer-content-left">
                        <img src={Logo} alt="audiophile" />
                        <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                        <p>Copyright 2021. All Rights Reserved</p>
                    </div>

                    <div className="footer-content-right">

                        <ul className='footer-list'>
                            <li><Link to={'/'}>HOME</Link></li>
                            <li><Link to={'/headphones'}>HEADPHONES</Link></li>
                            <li><Link to={'/earphones'}>EARPHONES</Link></li>
                            <li><Link to={'/speakers'}>SPEAKERS</Link></li>
                        </ul>
                        
                        <div className="footer-icons">
                            <img src={Facebook} alt="Facebook" />
                            <img src={Twitter} alt="Twitter" />
                            <img src={Instagram} alt="Intstagram" />
                        </div>
                        
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer