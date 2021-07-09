import React from 'react';
import styled from 'styled-components'
import HomeSection from '../components/HomeSection';

const Home = () => {
    return(
        <>
            <Container>
                <HomeSection 
                    title="Model S"
                    description="Order Online for Touchless Delivery"
                    backgroundImg="model-s.jpg"
                    leftBtnText="Custom order"
                    rightBtnText="Existing inventory" 
                />

                <HomeSection 
                    title="Model Y"
                    description="Order Online for Touchless Delivery"
                    backgroundImg="model-y.jpg"
                    leftBtnText="Custom order"
                    rightBtnText="Existing inventory" 
                />

                <HomeSection 
                    title="Model 3"
                    description="Order Online for Touchless Delivery"
                    backgroundImg="model-3.jpg"
                    leftBtnText="Custom order"
                    rightBtnText="Existing inventory" 
                />

                <HomeSection 
                    title="Model X"
                    description="Order Online for Touchless Delivery"
                    backgroundImg="model-x.jpg"
                    leftBtnText="Custom order"
                    rightBtnText="Existing inventory" 
                />

                <HomeSection 
                    title="Lowest Cost Solar Panel in India"
                    description="Money-back guarantee"
                    backgroundImg="solar-panel.jpg"
                    leftBtnText="Order order"
                    rightBtnText="Learn More" 
                />

                <HomeSection 
                    title="Solar for New Roofs"
                    description="Solar Roofs cost less than New Roofs"
                    backgroundImg="solar-roof.jpg"
                    leftBtnText="Order order"
                    rightBtnText="Learn More" 
                />

                <HomeSection 
                    title="Accessories"
                    description=""
                    backgroundImg="accessories.jpg"
                    leftBtnText="Shop Now" 
                />

            </Container>
        </>
    )
}

export default Home;

const Container = styled.div`
    height: 100vh;
`
