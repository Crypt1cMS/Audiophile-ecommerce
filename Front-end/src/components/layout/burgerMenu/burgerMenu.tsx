import Hamburger from "hamburger-react"
import { useState } from "react"
import './burgerMenu.css'
import { Link } from "react-router"
import Logo from '../../../assets/audiophile-black.png' 

function BurgerMenu() {
    const [open, setOpen] = useState(false)
    
    return (
        <>
            <div className="burger-container">
                <Hamburger 
                    size={28}
                    toggled={open}
                    toggle={setOpen}
                />

                {open && <div className="burger-content">

                    <header>
                        <Hamburger 
                            size={28}
                            toggled={open}
                            toggle={setOpen}
                        />
                    </header>

                    <div className="burger-items">
                        <Link className="border" to={'/'}><p>HOMEPAGE</p></Link>
                        <Link className="border" to={'/headphones'}><p>HEADPHONES</p></Link>
                        <Link className="border" to={'/earphones'}><p>EARPHONES</p></Link>
                        <Link to={'/speakers'}><p>SPEAKERS</p></Link>
                    </div>
                    
                    <div className="logo">
                        <img src={Logo} alt="Logo audiophile" />
                    </div>
                </div>}
                
            </div>

        </>
    )
}

export default BurgerMenu