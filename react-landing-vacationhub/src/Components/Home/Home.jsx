import './home.css'
import largeImg from './Home-Img-Large.png'

import SearchBar from './SearchBar'
import CountryData from './Data.json'

const Home = () => {
    return (
        <section className='home'>
            <div className='home-content'>
                <h1>
                    Dare to live <span className='life-word'>the life</span> you
                    always <p className='wanted-word'>wanted</p>
                </h1>
                <p className='home-text'>
                    Life is short and the world is wide. So, better get started.
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
        </section>
    )
}

export default Home
