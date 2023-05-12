import { links } from '../../data'
import { useRef, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import './nav.css'

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
        setIsNavOpen(!isNavOpen)
    }
    return (
        <header>
            <h3>Vacation Hub</h3>
            <nav ref={navRef}>
                {links.map((link) => {
                    const { id, url, text } = link
                    return (
                        <a key={id} href={url}>
                            {text}
                        </a>
                    )
                })}
                <div className='login-content'>
                    <a href=''>Login</a>
                    <button>Register</button>
                </div>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                {isNavOpen ? <FaTimes /> : <FaBars />}
            </button>
        </header>
    )
}

export default Navbar
