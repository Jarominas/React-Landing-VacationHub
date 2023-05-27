import './about.css'
import bigpic from './Big-pic.png'
import CountUp from 'react-countup'

const About = () => {
    return (
        <section className='about'>
            <div className='about-images'>
                <img src={bigpic} alt='' />
            </div>
            <div className='about-right-content'>
                <div className='about-us'>About us</div>
                <h3 className='title'>
                    Our tour plan is to fulfil your
                    <span className='dream-wish'> dream wish</span>
                </h3>
                <p className='about-text'>
                    Understand to achieve anything requires faith and belief in
                    yourself, vision, hard work, determination, and dedication.
                </p>
                <div className='numbers-content'>
                    <div className='number-one'>
                        <div className='number'>
                            <CountUp start={10} end={15} duration={5} />
                        </div>
                        <p className='number-text'>Years of Experience</p>
                    </div>
                    <div className='number-two'>
                        <div className='number'>
                            <CountUp start={990} end={1000} duration={5} />
                        </div>
                        <p className='number-text'>Sucessful Trips</p>
                    </div>
                    <div className='number-three'>
                        <div className='number'>
                            <CountUp end={20} suffix='K' duration={5} />
                        </div>
                        <p className='number-text'>Happy Customers</p>
                    </div>
                    <div className='number-four'>
                        <div className='number'>
                            <CountUp
                                start={4}
                                end={4.8}
                                decimals={1}
                                decimal='.'
                                duration={5}
                            />
                        </div>
                        <p className='number-text'>Overall Rating</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
