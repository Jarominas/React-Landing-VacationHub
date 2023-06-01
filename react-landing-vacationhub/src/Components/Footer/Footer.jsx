import React from 'react'
import styled from 'styled-components'
import { Logo } from '../Navbar/Navbar'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'

const FooterContainer = styled.footer`
      display: flex;
      justify-content: space-between;
      margin-top: 1em;
      h3 {
            font-size: 1em;
      }
      p {
            font-size: 16px;
            margin-bottom: 0.5em;
      }

      * {
            margin-bottom: 1em;
      }
      div {
            margin: 0 0.3rem;
      }

      @media screen and (max-width: 1024px) {
            p {
                  font-size: 13px;
            }
      }
      @media screen and (max-width: 645px) {
            .footer-about {
                  display: none;
            }
            .footer-company {
                  display: none;
            }
            .footer-support {
                  display: none;
            }
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
      width: 100%;
      padding: 18px 60px 18px 18px;
      font-size: 0.5em;
      border: 1px solid #ccc;
      border-radius: 55px;
`
const SearchIcon = styled.span`
      position: absolute;
      top: 50%;
      right: 10px;

      transform: translateY(-75%);
      background-image: url('https://raw.githubusercontent.com/Jarominas/React-Projects/main/react-landing-vacationhub/src/Components/Footer/send-btn.png');
      background-repeat: no-repeat;
      background-position: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      cursor: pointer;
`
const SearchBar = () => {
      return (
            <InputContainer>
                  <SearchInput
                        type='text'
                        placeholder='Enter your email address'
                  />
                  <SearchIcon />
            </InputContainer>
      )
}
const Footer = () => {
      return (
            <section>
                  <FooterContainer>
                        <Adress>
                              <Logo style={{ fontSize: '1.2em' }}>
                                    Vacation Hub
                              </Logo>
                              <p style={{ fontSize: '14px' }}>
                                    4517 Washington Ave. Manchester, Kentucky
                                    39495
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
                                    <InstagramIcon
                                          style={{ fontSize: '2em' }}
                                    />
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
                        <div
                              className='footer-newsletter'
                              style={{ width: '270px' }}
                        >
                              <h3>Newsletter</h3>
                              <p>
                                    Subscribe our newsletter and get exciting
                                    offers{' '}
                              </p>
                              <SearchBar />
                        </div>
                  </FooterContainer>
            </section>
      )
}

export default Footer
