import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import './app.css'
import TourCarousel from './Components/TourCarousel/TourCarousel'
import Testimonial from './Components/Testimonial/Testimonial'
import AllTours from './Components/AllTours/AllTours'
import Footer from './Components/Footer/Footer'

function App() {
      return (
            <>
                  <Navbar id='1' />
                  <Home />
                  <About />
                  <TourCarousel />
                  <Testimonial />
                  <AllTours />
                  <Footer />
            </>
      )
}

export default App
