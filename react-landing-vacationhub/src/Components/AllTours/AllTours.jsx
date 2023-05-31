import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    max-width: 1145px;
    margin: 0 auto;
    margin-top: 5em;
    text-align: center;
`
const Title = styled.h2`
    font-size: 2.5vw;
    line-height: 3vw;
    margin-bottom: 1vw;
`

export const Button = styled.button`
    padding: 0.5rem 0.5rem;
    color: #ffffff;
    font-weight: 700;
    border: none;
    background-color: #e61c5d;
    border-radius: 0.5rem;
    cursor: pointer;
`

const ImageWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`
const AllTours = () => {
    return (
        <Section>
            <Title>
                We can do anything we want to if we stick to it long enough.
            </Title>
            <p>Do what you can, with what you have, where you are.</p>
            <Button>See all tours</Button>
            <ImageWrapper></ImageWrapper>
        </Section>
    )
}

export default AllTours
