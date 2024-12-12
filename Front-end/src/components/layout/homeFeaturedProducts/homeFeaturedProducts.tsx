import './homeFeaturedProducts.css'
import '../../../global.css'
import SpeakerZX9 from '../../../assets/image-speaker-zx9.png'
import CirclePattern from '../../../assets/pattern-circles.svg'
import { Link } from 'react-router'
import EarphonesYX1 from '../../../assets/image-earphones-yx1.jpg'

function HomeFeaturedProducts() {
    return (
        <>
            <section className="featured-container">

                <div className="featured-grid-container">
                    <div className="featured-1">

                        <div className="flex-container">

                            <div className="featured-left-content">
                                <img id="speaker" src={SpeakerZX9} alt="Speaker ZX9" />
                                <img id="circle-pattern" src={CirclePattern} alt="Circle Pattern" />
                            </div>

                            
                            <div className="featured-right-content">
                                <h2>ZX9 <br/>SPEAKER</h2>
                                <p>Upgrade to premium speakers that are <br />phenomenally built to deliver truly remarkable <br />sound.</p>
                                <Link className='secondary-btn' to={'/speakers'}><p>SEE PRODUCT</p></Link>
                            </div>

                        </div>
                                                
                    </div>

                    <div className="featured-2">

                        <img className='featured-2-responsive-img' alt="Speaker ZX7" />

                        <div className="featured-2-content">
                            <h3>ZX7 SPEAKER</h3>
                            <Link to={'/speakers'} className='outline-btn'>SEE PRODUCT</Link>
                        </div>
                        
                    </div>

                    <div className="featured-3">
                        <img src={EarphonesYX1} alt="Earphones YX1" />
                    </div>

                    <div className="featured-4">
                        <h3>YX1 EARPHONES</h3>
                        <Link to={'/earphones'} className='outline-btn'>SEE PRODUCT</Link>
                    </div>
                </div>

            </section>
        </>
    )
}

export default HomeFeaturedProducts;