import './aboutHomePage.css'
import '../../../global.css'

function AboutHomePage() {
    return (
        <>
            <section className='about-container'>

                <div className="about-content">

                    <div className="about-content-left">

                        <div className="content-left-text">
                            <h2>Bringing you the <span>best</span> audio gear</h2>
                            <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
                        </div>

                    </div>

                    <div className="about-content-right">
                        <img className='about-img-responsive' alt="" />
                    </div>

                </div>

            </section>
        </>
    )
}

export default AboutHomePage