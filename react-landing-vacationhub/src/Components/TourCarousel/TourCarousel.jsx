import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './tourCarousel.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import Slider from 'react-slick'
import TourData from './TourCarouselData.json'
import React from 'react'
import { motion } from 'framer-motion'
import { textAnimation } from '../Home/Home'
import { fromRightAnimation } from '../Home/Home'

function TourCarousel() {
      const slider = React.useRef(null)
      var settings = {
            className: 'slider variable-width',
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            variableWidth: true,
            adaptiveHeight: true,
            arrows: false,
            responsive: [
                  {
                        breakpoint: 1024,
                        settings: {
                              slidesToShow: 3,
                              slidesToScroll: 1,
                              infinite: true,
                              dots: false,
                        },
                  },
                  {
                        breakpoint: 600,
                        settings: {
                              slidesToShow: 2,
                              slidesToScroll: 1,
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
            <motion.div
                  initial='hidden'
                  whileInView='visible'
                  className='carousel-section'
            >
                  <div className='carousel-content'>
                        <div className='carousel-text'>
                              <motion.p variants={textAnimation}>
                                    Tour Packages
                              </motion.p>
                              <motion.h2
                                    variants={textAnimation}
                                    custom={2}
                                    className='title'
                              >
                                    The amazing places around
                                    <span>the world</span>
                              </motion.h2>
                        </div>
                        <motion.div
                              variants={fromRightAnimation}
                              custom={2}
                              className='carousel-btn'
                        >
                              <button
                                    onClick={() => slider?.current?.slickPrev()}
                              >
                                    <ArrowBackIosIcon />
                              </button>
                              <button
                                    onClick={() => slider?.current?.slickNext()}
                              >
                                    <ArrowForwardIosIcon />
                              </button>
                        </motion.div>
                  </div>
                  <motion.div
                        variants={fromRightAnimation}
                        className='carousel-slider'
                  >
                        <Slider ref={slider} {...settings}>
                              {TourData.map((tour) => {
                                    const {
                                          id,
                                          img,
                                          title,
                                          name,
                                          raiting,
                                          price,
                                          days,
                                    } = tour
                                    return (
                                          <div
                                                style={{ width: 350 }}
                                                key={id}
                                                className='carousel-box'
                                          >
                                                <img src={img} alt={name} />
                                                <div className='box-content'>
                                                      <h4>{title}</h4>
                                                      <p>{name}</p>
                                                      <img
                                                            src={raiting}
                                                            alt={name}
                                                      />
                                                      <div className='box-footer'>
                                                            <h3>{price}</h3>
                                                            <p>{days}</p>
                                                      </div>
                                                </div>
                                          </div>
                                    )
                              })}
                        </Slider>
                  </motion.div>
            </motion.div>
      )
}
export default TourCarousel
