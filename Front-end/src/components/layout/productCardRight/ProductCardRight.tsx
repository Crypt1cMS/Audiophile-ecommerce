import './ProductCardRight.css'
import { Link } from 'react-router'

interface ProductLeftProps {
    productImage: string;
    productImageAlt: string;
    productTittle: string;
    productDescription: string;
    isNewProduct: boolean;
}

function ProductCardRight(prop: ProductLeftProps) {
    return (
        <>
            <section className='product-card-right-container'>

                <div className="product-card-right-content">

                    <div className="product-card-right-content-left">

                        <div className="product-card-right-content-left-img-box">
                            <img src={prop.productImage} alt={prop.productImageAlt} />
                        </div>

                    </div>

                    <div className="product-card-right-content-right">

                        {prop.isNewProduct && (
                            <span className='overline-highlight'>NEW PRODUCT</span>
                        )}
                        
                        <h2>{prop.productTittle}</h2>
                        <p>{prop.productDescription}</p>
                        <Link className='primary-btn' to={'/'}>SEE PRODUCT</Link>
                    </div>

                </div>

            </section>
        </>
    )
}

export default ProductCardRight