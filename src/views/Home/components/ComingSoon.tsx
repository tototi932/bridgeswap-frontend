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
         <Carousel 
        autoPlay
        interval={2000}
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        width='100'        
        >
            <div style={carouseImg}>
                <SlideImg src="/images/baners/bridgeswap-farms.png" alt='bridgeswap farms'/>
            </div>
            <div style={carouseImg}>
                <SlideImg src="/images/baners/bridgeswap-lottery.png" alt='bridgeswap lottery'/>
            </div>
            <div style={carouseImg}>
                <SlideImg src="/images/baners/bridgeswap-pools.png" alt='bridgeswap-pools'/>
            </div>
            <div style={carouseImg}>
                <SlideImg src="/images/baners/defi2.0-zap.png" alt='defi2.0-zap'/>
            </div>
            <div style={carouseImg}>
                <SlideImg src="/images/baners/referral-program.png" alt='referral-program'/>
            </div>
            <div style={carouseImg}>
                <SlideImg src="/images/baners/airdrop.jpeg" alt='airdrop'/>
            </div>
            
        </Carousel>
    
    )
}

export default ComingSoon
