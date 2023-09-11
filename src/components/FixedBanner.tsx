import {  Button, Image } from '@chakra-ui/react'
import BannerImage from '../assets/banner-image.png';
import BannerImageOverlay from '../assets/banner-image-overlay.png';


const FixedBanner = () => {
    return (
        <>
            <Image src={BannerImage} objectFit={'cover'} style={{ borderBottomLeftRadius: '25%' }} maxW={'100%'}
                position={'absolute'} top='0' right={'0'}
            />
            <Image src={BannerImageOverlay} objectFit={'cover'} position={'absolute'} top='-1' right={'0'} />
            <Button position={'absolute'} top='20px' right={'20px'} rounded={'full'}
                bg={'transparent'} color='#fff' colorScheme='whiteAlpha' border={'1px solid #fff'}
            >Get In Touch</Button>
        </>
    )
}

export default FixedBanner