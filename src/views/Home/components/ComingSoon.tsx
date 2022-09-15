import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Heading, Text, Button, Image, Card } from '@pancakeswap/uikit'
import styled from 'styled-components'

const SlideImg = styled.img`
    width: 260px;
    height: 200px;
    ${({ theme }) => theme.mediaQueries.xs} {
        width: 260px;
        height: 200px;
    }

    ${({ theme }) => theme.mediaQueries.md} {
        width: 400px;
        height: 200px;
    }

    ${({ theme }) => theme.mediaQueries.lg} {
        width: 600px;
        height: 200px;
    }
`


const ComingSoon = () => {

    const carouseImg = {
        maxWidth: '400px',
        margin: '0 auto'
    }

    return (
      
    
    )
}

export default ComingSoon
