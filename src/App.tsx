import React from 'react'
import { Box, ChakraProvider, Spacer } from '@chakra-ui/react'
import Banner from './components/Banner'
import FixedBanner from './components/FixedBanner'
import AboutUs from './components/AboutUs'
import LatestArticles from './components/LatestArticles'
import Footer from './components/Footer'


const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Box minH={'100vh'}>
        <FixedBanner />
        <Banner />
        <Spacer height="5em" />
        <AboutUs />
        <Spacer height="5em" />
        <LatestArticles />
        <Spacer height="5em" />
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default App