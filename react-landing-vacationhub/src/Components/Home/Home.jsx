import { motion } from 'framer-motion'
import './home.css'
import largeImg from './Home-Img-Large.png'

import { MotionSearchBar } from './SearchBar'
import CountryData from './Data.json'

export const textAnimation = {
      hidden: {
            x: -100,
            opacity: 0,
      },
      visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: {
                  duration: 1.5,
                  delay: custom * 0.5,
            },
      }),
}

export const fromRightAnimation = {
      hidden: {
            x: 200,
            opacity: 0,
      },
      visible: (custom) => ({
            x: 0,
            opacity: 1,
            transition: {
                  duration: 1,
                  delay: custom * 0.5,
            },
      }),
}

const Home = () => {
      return (
            <motion.section
                  initial='hidden'
                  whileInView='visible'
                  className='home'
            >
                  <div className='home-content'>
                        <motion.h1 variants={textAnimation} custom={1}>
                              Dare to live{' '}
                              <span className='life-word'>the life</span> you
                              always <p className='wanted-word'>wanted</p>
                        </motion.h1>
                        <motion.p
                              variants={textAnimation}
                              custom={2}
                              className='home-text'
                        >
                              Life is short and the world is wide. So, better
                              get started.
                        </motion.p>
                        <MotionSearchBar
                              variants={textAnimation}
                              custom={3}
                              placeholder='Enter country here...'
                              data={CountryData}
                        />
                  </div>
                  <motion.div
                        variants={fromRightAnimation}
                        className='home-images'
                  >
                        <div className='img-large'>
                              <img src={largeImg} alt='home-img-large' />
                        </div>
                  </motion.div>
            </motion.section>
      )
}

export default Home
