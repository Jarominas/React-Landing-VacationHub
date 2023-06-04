import './about.css'
import bigpic from './Big-pic.png'

import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { textAnimation } from '../Home/Home'
import { fromRightAnimation } from '../Home/Home'

const About = () => {
      return (
            <motion.section
                  initial='hidden'
                  whileInView='visible'
                  className='about'
            >
                  <motion.div variants={textAnimation} className='about-images'>
                        <img src={bigpic} alt='' />
                  </motion.div>
                  <div className='about-right-content'>
                        <motion.div
                              variants={fromRightAnimation}
                              custom={1}
                              className='about-us'
                        >
                              About us
                        </motion.div>
                        <motion.h3
                              variants={fromRightAnimation}
                              custom={1.5}
                              className='title'
                        >
                              Our tour plan is to fulfil your
                              <span className='dream-wish'> dream wish</span>
                        </motion.h3>
                        <motion.p
                              variants={fromRightAnimation}
                              custom={2}
                              className='about-text'
                        >
                              Understand to achieve anything requires faith and
                              belief in yourself, vision, hard work,
                              determination, and dedication.
                        </motion.p>
                        <motion.div
                              variants={fromRightAnimation}
                              custom={3}
                              className='numbers-content'
                        >
                              <div className='number-one'>
                                    <div className='number'>
                                          <CountUp
                                                enableScrollSpy
                                                start={5}
                                                end={15}
                                                duration={5}
                                          />
                                    </div>
                                    <p className='number-text'>
                                          Years of Experience
                                    </p>
                              </div>
                              <div className='number-two'>
                                    <div className='number'>
                                          <CountUp
                                                enableScrollSpy
                                                start={890}
                                                end={1000}
                                                duration={8}
                                          />
                                    </div>
                                    <p className='number-text'>
                                          Sucessful Trips
                                    </p>
                              </div>
                              <div className='number-three'>
                                    <div className='number'>
                                          <CountUp
                                                enableScrollSpy
                                                end={20}
                                                suffix='K'
                                                duration={6}
                                          />
                                    </div>
                                    <p className='number-text'>
                                          Happy Customers
                                    </p>
                              </div>
                              <div className='number-four'>
                                    <div className='number'>
                                          <CountUp
                                                enableScrollSpy
                                                start={3}
                                                end={4.8}
                                                decimals={1}
                                                decimal='.'
                                                duration={5}
                                          />
                                    </div>
                                    <p className='number-text'>
                                          Overall Rating
                                    </p>
                              </div>
                        </motion.div>
                  </div>
            </motion.section>
      )
}

export default About
