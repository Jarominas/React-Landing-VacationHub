import React from 'react'
import styled from 'styled-components'
import amsterdam from './img/amsterdam.png'
import paris1 from './img/paris1.png'
import paris2 from './img/paris2.png'
import portugal from './img/portugal.png'

const Section = styled.section`
      max-width: 1145px;
      margin: 0 auto;
      margin-top: 5em;
      text-align: center;

      p {
            margin-bottom: 1em;
      }
`
const Title = styled.h2`
      font-size: 3rem;
      line-height: 3rem;
      margin-bottom: 1vw;

      span {
            color: var(--primary-color);
      }
      @media screen and (max-width: 692px) {
            font-size: 2rem;
            line-height: 2.2rem;
      }
`

export const Button = styled.button`
      padding: 0.5rem 0.5rem;
      color: #ffffff;
      font-weight: 700;
      border: none;
      background-color: #e61c5d;
      border-radius: 0.5rem;
      cursor: pointer;
      @media screen and (max-width: 692px) {
            margin-bottom: 3rem;
            margin-top: 2rem;
      }
`

const ImageWrapper = styled.div`
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      justify-content: center;
      align-items: flex-end;
      @media screen and (max-width: 1080px) {
            .smallCard {
                  display: none;
            }
      }
      @media screen and (max-width: 645px) {
            display: none;

            .bigCardRight {
                  display: none;
            }
      }
`

const TourCard = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 0 1rem;
      margin-top: 2em;
      margin-bottom: 5em;
      padding: 10px;
      background-color: #fff;
      box-shadow: 0px 12px 40px rgba(0, 0, 0, 0.04);
      border-radius: 16px;

      * {
            margin-bottom: 12px;
      }

      img {
            border-radius: 16px;
      }
      div {
            display: flex;
            align-items: center;
            justify-content: space-between;
      }
      h4 {
            text-align: left;
      }
      h3 {
            color: var(--primary-color);
      }
      p {
            color: #808080;
      }
      @media screen and (max-width: 645px) {
            width: 100%;
            margin-bottom: 10px;
      }
`
const AllTours = () => {
      return (
            <Section>
                  <Title>
                        We can do anything we want to if <span>we stick</span>
                        to it long enough.
                  </Title>
                  <p>Do what you can, with what you have, where you are.</p>
                  <Button>See all tours</Button>
                  <ImageWrapper>
                        <TourCard
                              className='bigCardLeft'
                              style={{
                                    width: '254px',
                                    height: '290px',
                                    marginBottom: '10rem',
                              }}
                        >
                              <img
                                    src={portugal}
                                    alt=''
                                    style={{
                                          width: '234px',
                                          height: '156px',
                                          objectFit: 'cover',
                                    }}
                              />
                              <h4>Porto, Portugal</h4>
                              <div>
                                    <h3>$150</h3>
                                    <p>7 days tour</p>
                              </div>
                        </TourCard>
                        <TourCard
                              className='smallCard'
                              style={{ width: '190px', height: '217px' }}
                        >
                              <img
                                    src={paris1}
                                    alt=''
                                    style={{
                                          width: '175px',
                                          height: '127px',
                                          objectFit: 'cover',
                                    }}
                              />
                              <h4
                                    style={{
                                          fontSize: '14px',
                                          marginBottom: '0',
                                    }}
                              >
                                    Porto, Portugal
                              </h4>
                              <div>
                                    <h3 style={{ fontSize: '14px' }}>$150</h3>
                                    <p style={{ fontSize: '14px' }}>
                                          7 days tour
                                    </p>
                              </div>
                        </TourCard>
                        <TourCard
                              className='smallCard'
                              style={{ width: '190px', height: '217px' }}
                        >
                              <img
                                    src={paris2}
                                    alt=''
                                    style={{
                                          width: '175px',
                                          height: '142px',
                                          objectFit: 'cover',
                                    }}
                              />
                              <h4
                                    style={{
                                          fontSize: '14px',
                                          marginBottom: '0',
                                    }}
                              >
                                    Porto, Portugal
                              </h4>
                              <div>
                                    <h3 style={{ fontSize: '14px' }}>$150</h3>
                                    <p style={{ fontSize: '14px' }}>
                                          7 days tour
                                    </p>
                              </div>
                        </TourCard>
                        <TourCard
                              className='bigCardRight'
                              style={{
                                    width: '254px',
                                    height: '290px',
                                    marginBottom: '10rem',
                              }}
                        >
                              <img
                                    src={amsterdam}
                                    alt=''
                                    style={{
                                          width: '234px',
                                          height: '190px',
                                    }}
                              />
                              <h4>Porto, Portugal</h4>
                              <div>
                                    <h3>$150</h3>
                                    <p>7 days tour</p>
                              </div>
                        </TourCard>
                  </ImageWrapper>
            </Section>
      )
}

export default AllTours
