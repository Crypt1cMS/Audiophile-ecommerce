import CategoryHeader from '../components/layout/categoryHeader/categoryHeader'
import Navbar from '../components/layout/navbar/navbar'
import ProductCardLeft from '../components/layout/productCardLeft/productCardLeft'
import ProductCardRight from '../components/layout/productCardRight/ProductCardRight'
import Categories from '../components/layout/categories/categories'
import AboutHomePage from '../components/layout/aboutHomePage/aboutHomePage'
import Footer from '../components/layout/footer/footer'


function Headphones() {

  return (
    <>
      <div className="wrapper">
        <Navbar />
      </div>

      <CategoryHeader
        category="Headphones"
      />

      <div className="wrapper">
        <ProductCardLeft
          isNewProduct={true}
          productImage={'/images/XX99-Mark-headphone-Display.png'}
          productImageAlt={"Product XX99 Headphones"}
          productTittle={"XX99 Mark II Headphones"}
          productDescription={"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."}
        />

          <ProductCardRight 
            isNewProduct={false}
            productImage={'/images/XX99-Mark-headphone-Display.png'}
            productImageAlt={"Product XX99 Headphones"}
            productTittle={"XX99 Mark II Headphones"}
            productDescription={"The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."}            
          />
            <Categories />
              <AboutHomePage />
      </div>

      <Footer />
      
    </>
  )
}

export default Headphones
