import React from 'react'
import styled from 'styled-components'
import { Logo } from '../Navbar/Navbar'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'

const FooterContainer = styled.footer`
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      margin-top: 5em;
      p {
            font-size: 16px;
      }
`
const Adress = styled.div`
      width: 200px;

      text-align: left;
      * {
            margin-bottom: 1rem;
      }
`
const InputContainer = styled.div`
      position: relative;
`
const SearchInput = styled.input`
      width: 270px;
      padding: 10px 40px 10px 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
`
const SearchIcon = styled.span`
      position: absolute;
      top: 50%;
      right: 10px;

      transform: translateY(-50%);
      background-image: url('send-btn.png');
      background-repeat: no-repeat;
      background-position: center;
      width: 20px;
      height: 20px;
      cursor: pointer;
`
const SearchBar = () => {
      return (
            <InputContainer>
                  <SearchInput type='text' placeholder='Enter' />
                  <SearchIcon />
            </InputContainer>
      )
}
const Footer = () => {
      return (
            <FooterContainer>
                  <Adress>
                        <Logo style={{ fontSize: '1.5em' }}>Vacation Hub</Logo>
                        <p style={{ fontSize: '14px' }}>
                              4517 Washington Ave. Manchester, Kentucky 39495
                        </p>
                        <div
                              className='social-icons'
                              style={{
                                    color: 'var(--primary-color)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                              }}
                        >
                              <FacebookIcon style={{ fontSize: '2em' }} />
                              <InstagramIcon style={{ fontSize: '2em' }} />
                              <YouTubeIcon style={{ fontSize: '2em' }} />
                        </div>
                  </Adress>
                  <div className='footer-about'>
                        <h3>About</h3>
                        <p>About us</p>
                        <p>Features</p>
                        <p>News</p>
                        <p>Plans</p>
                  </div>
                  <div className='footer-company'>
                        <h3>Company</h3>
                        <p>Why Tripy</p>
                        <p>Partner with us</p>
                        <p>FAQ</p>
                        <p>Blog</p>
                  </div>
                  <div className='footer-support'>
                        <h3>Support</h3>
                        <p>Account</p>
                        <p>Support center</p>
                        <p>Feedback</p>
                        <p>Contact us</p>
                  </div>
                  <div className='footer-newsletter' style={{ width: '270px' }}>
                        <h3>Newsletter</h3>
                        <p>Subscribe our newsletter and get exciting offers </p>
                        <SearchBar />
                  </div>
            </FooterContainer>
      )
}

export default Footer
