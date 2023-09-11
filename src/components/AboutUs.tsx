import { Box, Button, Container, HStack, Image, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import AboutImage from '../assets/pharmasict-serving-customer-drug-store.png'

const AboutUs: React.FC = () => {
    return (
        <Box bg={'linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%);'}>
            <Container maxW={'container.xl'}>
                <HStack justify={'space-around'} alignItems={'center'}>
                    <Image src={AboutImage} />
                    <Box maxW={'450px'} w='full'>
                        <Text color={'#0E2368'} lineHeight={'27px'} fontSize={'45px'} fontWeight={'600'} mb={10}>About Us</Text>
                        <Text color="#444957" fontSize={'15px'}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
                        </Text>
                        <Spacer h={'2em'} />
                        <Button rounded={'full'} px='5' variant={'unstyled'} bg="#E23744" color='#fff'>Read More</Button>
                    </Box>
                </HStack>
            </Container>
        </Box>
    )
}

export default AboutUs