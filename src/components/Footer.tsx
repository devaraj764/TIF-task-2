import { Box, Container, Grid, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Logo from '../assets/logo.png';
import { BiLogoInstagram, BiLogoTwitter, BiLogoFacebook } from 'react-icons/bi'


const Footer: React.FC = () => {
    return (
        <Box py={'4em'} bg={'linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%);'}>
            <Container maxW='container.xl'>
                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" }}
                    gap={'30px'}
                    alignItems={'center'}
                >
                    <Image src={Logo} alt="Logo" />
                    <VStack h={'100%'} alignItems={'center'} >
                        <div>
                            <Text fontWeight={'600'} fontSize="18px" color='#0E2368' mb={'1em'}>Contact Us</Text>

                            <Text color='#646874' fontSize="15px" mb={3}>
                                Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
                            </Text>
                            <Text color='#646874' fontSize="15px" mb={3}>
                                example2020@gmail.com
                            </Text>
                            <Text color='#646874' fontSize="15px" mb={3}>
                                (904) 443-0343
                            </Text>
                        </div>
                    </VStack>
                    <VStack h={'100%'} alignItems={'center'}>
                        <div>
                            <Text fontWeight={'600'} fontSize="18px" color='#0E2368' mb={'1em'}>More</Text>
                            <Text color='#646874' fontSize="15px" mb={3}>
                                About Us
                            </Text>
                            <Text color='#646874' fontSize="15px" mb={3}>
                                Products
                            </Text>
                            <Text color='#646874' fontSize="15px" mb={3}>
                                Career
                            </Text>
                            <Text color='#646874' fontSize="15px" mb={3}>
                                Contact Us
                            </Text>
                        </div>
                    </VStack>
                    <VStack h={'100%'} justifyContent={'space-between'}>
                        <Box fontWeight={'600'} fontSize="18px" color='#0E2368' textAlign={'center'}>
                            <Text mb={2}>Social Links</Text>
                            <HStack gap='30px'>
                                <BiLogoInstagram size='24px' />
                                <BiLogoTwitter size='24px' />
                                <BiLogoFacebook size='24px' />
                            </HStack>
                        </Box>
                        <Text color='#646874' fontSize="15px">© 2022 Food Truck Example</Text>
                    </VStack>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer