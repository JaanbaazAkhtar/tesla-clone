import React from 'react';
import styled from 'styled-components'
import HomeSection from '../components/HomeSection';

const Home = () => {
    return(
        <>
            <Container>
                <HomeSection />
            </Container>
        </>
    )
}

export default Home;

const Container = styled.div`
    height: 100vh;
`
