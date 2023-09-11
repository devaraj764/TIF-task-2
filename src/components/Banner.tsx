import { Box, Button, Container, Grid, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import Logo from '../assets/logo.png';
import React from 'react'

const Banner: React.FC = () => {
    return (
        <Container maxW={'container.xl'} px="0" height="839px">
            <Grid
                templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
            >
                <Box p={4}>
                    <Image src={Logo} width={'100px'} />
                    <Spacer height="5em" />
                    <Heading fontSize={'3.5em'} color="#0E2368">
                        Discover the <br />
                        <span style={{ color: 'red' }}>Best</span> Foods <br />
                        and Drinks
                    </Heading>
                    <Spacer height="2em" />
                    <Text color="#444957" maxW={'300px'}>
                        Naturally made Healthcare Products for the better care & support of your body.
                    </Text>
                    <Spacer height="3em" />
                    <Button fontSize={'16px'} h={'3.5em'} rounded={'full'} bg="#E23744" color='#fff' px='10' variant={'unstyled'}>Explore Now!</Button>
                </Box>
            </Grid>
        </Container>
    )
}

export default Banner