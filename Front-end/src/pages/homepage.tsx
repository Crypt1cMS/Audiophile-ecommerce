import '../global.css'
import Navbar from '../components/layout/navbar/navbar'
import Hero from '../components/layout/hero/hero'
import Categories from '../components/layout/categories/categories'
import HomeFeaturedProducts from '../components/layout/homeFeaturedProducts/homeFeaturedProducts'
import AboutHomePage from '../components/layout/aboutHomePage/aboutHomePage'
import Footer from '../components/layout/footer/footer'

function HomePage() {

  return (
    <>
      <div className="wrapper">
        <Navbar />
      </div>

      <Hero />

      <div className="wrapper">
        <Categories />
          <HomeFeaturedProducts />
            <AboutHomePage />
      </div>

      <Footer />
    </>
  )
}

export default HomePage
