import { Box, Button, Container, Grid, HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import OneOne from '../assets/one-1.png'
import OneTwo from '../assets/one-2.png'
import OneThree from '../assets/one-3.png'
import TwoOne from '../assets/two-1.png'
import TwoTwo from '../assets/two-2.png'
import TwoThree from '../assets/two-3.png'

const data = [
  {
    image: OneOne,
    title: 'Grilled Tomatoes at Home',
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    image: OneTwo,
    title: 'Snacks for Travel',
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    image: OneThree,
    title: 'Post-workout Recipes',
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    image: TwoOne,
    title: 'How To Grill Corn',
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    image: TwoTwo,
    title: 'Crunchwrap Supreme',
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
  {
    image: TwoThree,
    title: 'Broccoli Cheese Soup',
    description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
  },
]

const LatestArticles: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * 3;
  const indexOfFirstItem = indexOfLastItem - 3;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / 3);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <Container maxW="container.xl">
      <Text fontSize={'56px'}>Latest Articles</Text>
      {
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr 1fr" }}
          gap={'3em'}
          mt={'3em'}
        >
          {
            currentItems.map(article => (
              <VStack p={'1.5em'} border="1px solid rgba(147, 162, 211, 0.38)" rounded={'2xl'} justifyContent={'center'}>
                <Image src={article.image} alt={article.title} rounded={'2xl'} width="full" />
                <Box p='1em'>
                  <Heading fontSize='21px' color='#0E2368' mb={3}>{article.title}</Heading>
                  <Text color="#444957" fontSize={'15px'} mb={5}>
                    {article.description}
                  </Text>
                  <Button rounded={'full'} variant='outline' color='#424961' border='1px solid #424961'>Read More</Button>
                </Box>
              </VStack>
            ))
          }
        </Grid>
      }
      <HStack justifyContent={'center'} mt={'4em'}>
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          variant={'outline'}
          colorScheme='facebook'
          size={'sm'}
        >
          <MdArrowBackIosNew />
        </Button>
        <Text color='#0E2368' fontSize='18px'>{`${currentPage} / ${totalPages}`}</Text>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          variant={'outline'}
          colorScheme='facebook'
          size={'sm'}
        >
          <MdArrowForwardIos />
        </Button>
      </HStack>
    </Container>
  )
}

export default LatestArticles