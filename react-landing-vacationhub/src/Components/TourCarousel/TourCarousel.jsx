import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './tourCarousel.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import Slider from 'react-slick'
import TourData from './TourCarouselData.json'

function TourCarousel() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    return (
        <div className='carousel-section'>
            <h2> Responsive </h2>
            <div className='carousel-slider'>
                <Slider {...settings}>
                    {TourData.map((tour) => {
                        const { id, img, title, name, raiting, price, days } =
                            tour
                        return (
                            <div key={id} className='carousel-box'>
                                <h3>{price}</h3>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}
export default TourCarousel
