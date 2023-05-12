import { links } from '../../data'
import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import './nav.css'

const Navbar = () => {
    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav')
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
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaBars />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaTimes />
            </button>
        </header>
    )
}

export default Navbar
