import './categories.css'
import ProductX99 from '../../../assets/product x99 category.png'
import ProductZX9 from '../../../assets/product  zx9.png'
import ProductYX1 from '../../../assets/product yz1.png'
import { Link } from 'react-router'

function Categories() {
    return (
        <>
            <section className='categories-container'>
                
                <div className="categories-grid">

                    <div className="categories-item">
                        <img src={ProductX99} alt="Product X99" draggable={false}/>

                        <div className="categories-item-text">
                            <h6>HEADPHONES</h6>

                            <div className="categories-item-text-shop">
                                <Link to={'/headphones'}><p>Shop</p></Link>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                            </div>
                        </div>
                    </div>

                    <div className="categories-item">
                        <img src={ProductZX9} alt="Product X99" draggable={false}/>

                        <div className="categories-item-text">
                            <h6>SPEAKER</h6>

                            <div className="categories-item-text-shop">
                                <Link to={'/speakers'}><p>Shop</p></Link>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                            </div>
                        </div>
                    </div>

                    <div className="categories-item">
                        <img src={ProductYX1} alt="Product X99" draggable={false}/>

                        <div className="categories-item-text">
                            <h6>EARPHONES</h6>

                            <div className="categories-item-text-shop">
                                <Link to={'/earphones'}><p>Shop</p></Link>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Categories