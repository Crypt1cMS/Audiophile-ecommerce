import './hero.css'
import '../../../global.css'
import HomeImg from '../../../assets/Bitmap.png'
import { Link } from 'react-router'

function Hero() {

    return (
      <>
        <div className="hero-container">

          <div className="hero-content">

            <div className="hero-left-content">

              <div className="hero-text">
                <span className='overline'>New Product</span>
                <h1>XX99 Mark II <br /> Headphones</h1>
                <p>Experience natural, lifelike audio and exceptional <br /> build quality made for the passionate music <br />enthusiast.</p>
                <Link to={'/headphones'} className='primary-btn'><p>SEE PRODUCT</p></Link>
              </div>

            </div>

            <div className="hero-right-content">
              <img draggable={false} src={HomeImg} alt="X99 IMG" />
            </div>

          </div>

        </div>
      </>
    )
}

export default Hero