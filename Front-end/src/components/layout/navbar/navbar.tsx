import './navbar.css'
import '../../../global.css'
import Logo from '../../../assets/audiophile 2.svg'
import Cart from '../../../assets/icon-cart.svg'
import { Link } from 'react-router'
import BurgerMenu from '../burgerMenu/burgerMenu'

function Navbar() {

    return (
      <>
        <nav>

          <div className="nav-container">

            <div className="nav-burger-menu">
              <BurgerMenu />
            </div>
              
            <div className="nav-logo">
              <Link to={'/'}><img draggable={false} src={Logo} alt="audiophile Logo" /></Link>
            </div>

            <ul className='nav-list'>
              <li><Link to={'/'}><p>HOMEPAGE</p></Link></li>
              <li><Link to={'/headphones'}><p>HEADPHONES</p></Link></li>
              <li><Link to={'/earphones'}><p>EARPHONES</p></Link></li>
              <li><Link to={'/speakers'}><p>SPEAKERS</p></Link></li>
            </ul>

            <div className="nav-cart">
              <img draggable={false} src={Cart} alt="Cart" />
            </div>

          </div>

          <hr />

        </nav>
      </>
    )
}

export default Navbar