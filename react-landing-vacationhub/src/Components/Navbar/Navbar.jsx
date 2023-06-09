import { links } from '../../data'
import { useRef, useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import './nav.css'
import styled from 'styled-components'

export const Logo = styled.h3`
      h3 {
            color: #112b3c;
            font-weight: 900;
            position: relative;
            z-index: 3;
      }
      h3::after {
            content: '.';
            display: block;
            position: absolute;

            font-size: 2rem;
            color: #e61c5d;
            top: -69%;
            left: 43%;
      }
`

const Navbar = () => {
      const [isNavOpen, setIsNavOpen] = useState(false)
      const navRef = useRef()

      const showNavbar = () => {
            navRef.current.classList.toggle('responsive_nav')
            setIsNavOpen(!isNavOpen)
      }
      const closeNavbar = () => {
            if (isNavOpen) {
                  showNavbar()
            }
      }
      useEffect(() => {
            if (isNavOpen) {
                  navRef.current.classList.add('menu-open')
                  disableScroll()
            } else {
                  navRef.current.classList.remove('menu-open')
                  enableScroll()
            }
      }, [isNavOpen])
      const disableScroll = () => {
            document.body.style.overflow = 'hidden'
      }

      const enableScroll = () => {
            document.body.style.overflow = 'auto'
      }

      return (
            <header>
                  <Logo>Vacation Hub</Logo>
                  <nav ref={navRef}>
                        {links.map((link) => {
                              const { id, url, text } = link
                              return (
                                    <a
                                          key={id}
                                          href={url}
                                          className='links'
                                          onClick={closeNavbar}
                                    >
                                          {text}
                                    </a>
                              )
                        })}
                        <div className='login-content'>
                              <a href=''>Login</a>
                              <button>Register</button>
                        </div>
                        <button
                              className='nav-btn nav-close-btn'
                              onClick={showNavbar}
                        >
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
