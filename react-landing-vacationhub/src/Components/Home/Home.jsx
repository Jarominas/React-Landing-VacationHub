import { motion } from 'framer-motion'
import './home.css'
import largeImg from './Home-Img-Large.png'

import SearchBar from './SearchBar'
import CountryData from './Data.json'

const textAnimation = {
      hidden: {
            x: -100,
            opactiy: 0,
            transition: {
                  duration: 3,
            },
      },
      visible: {
            x: 0,
            opactiy: 1,
            transition: {
                  duration: 3,
                  ease: 'easeInOut',
            },
      },
}

const Home = () => {
      return (
            <motion.section
                  initial='hidden'
                  whileInView='visible'
                  className='home'
            >
                  <div className='home-content'>
                        <motion.h1 variants={textAnimation}>
                              Dare to live{' '}
                              <span className='life-word'>the life</span> you
                              always <p className='wanted-word'>wanted</p>
                        </motion.h1>
                        <p className='home-text'>
                              Life is short and the world is wide. So, better
                              get started.
                        </p>
                        <SearchBar
                              placeholder='Enter country here...'
                              data={CountryData}
                        />
                  </div>
                  <div className='home-images'>
                        <div className='img-large'>
                              <img src={largeImg} alt='home-img-large' />
                        </div>
                  </div>
            </motion.section>
      )
}

export default Home
