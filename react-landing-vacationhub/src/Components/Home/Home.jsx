import './home.css'
import largeImg from './Home-Img-Large.png'
import smallImg from './Home-Img-Small.png'
const Home = () => {
    return (
        <section className='home'>
            <div className='home-content'>
                <h1>
                    Dare to live <span className='life-word'>the life</span> you
                    always <span className='wanted-word'>wanted</span>.
                </h1>
                <p>
                    Life is short and the world is wide. So, better get started.
                </p>
            </div>
            <div className='home-images'>
                <img src={largeImg} alt='home-img-large' />
                <img src={smallImg} alt='home-img-small' />
            </div>
        </section>
    )
}

export default Home
