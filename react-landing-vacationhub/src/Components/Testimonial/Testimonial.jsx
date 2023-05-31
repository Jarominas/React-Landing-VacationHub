import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './testimonial.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import Slider from 'react-slick'
import TestimonialData from './TestimonialData.json'

import React from 'react'

const Testimonial = () => {
    const slider = React.useRef(null)
    var settings = {
        className: 'slider variable-width',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        adaptiveWidth: true,
        adaptiveHeight: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
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
        <div className='testimonial-section' style={{}}>
            <div className='testimonial-text'>
                <p>Testimonial</p>
                <h2 className='title'>
                    Satisfied <span>travellers</span> around the world
                </h2>
            </div>

            <div className='testimonial-slider'>
                <div className='slider-content'>
                    <Slider ref={slider} {...settings}>
                        {TestimonialData.map((testimonial) => {
                            const { id, img, name, position, raiting, text } =
                                testimonial
                            return (
                                <div key={id} className='testimonial-box'>
                                    <img src={img} alt={name} />
                                    <h4>{name}</h4>
                                    <p>{position}</p>
                                    <img src={raiting} alt={name} />
                                    <p>{text}</p>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
                <button
                    className='testimonial-prevBtn'
                    onClick={() => slider?.current?.slickPrev()}
                >
                    <ArrowBackIosIcon />
                </button>
                <button
                    className='testimonial-nextBtn'
                    onClick={() => slider?.current?.slickNext()}
                >
                    <ArrowForwardIosIcon />
                </button>
            </div>
        </div>
    )
}

export default Testimonial
