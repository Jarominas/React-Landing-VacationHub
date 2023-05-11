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
            <h3>Logo</h3>
            <nav ref={navRef}>
                {links.map((link) => {
                    const { id, url, text } = link
                    return (
                        <a key={id} href={url}>
                            {text}
                        </a>
                    )
                })}
                <button onClick={showNavbar}>
                    <FaBars />
                </button>
            </nav>
            <button>
                <FaBars />
            </button>
        </header>
    )
}

export default Navbar
