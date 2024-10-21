import React from 'react'
import { Card, CardBody, CardFooter, Stack, Heading, Divider, Button } from '@chakra-ui/react'

const CharacterCard = () => {
  return (
    <div>
      <Card maxW='sm' shadow="lg" m='10'>
  <CardBody>
    <img src="https://rukminim2.flixcart.com/image/850/1000/l1mh7rk0/poster/0/d/h/medium-shinchan-cartoon-wall-poster-decorative-poster-for-original-imagd5f6m5zwvhhy.jpeg?q=20&crop=false" className=" h-20"/>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>ShinChan</Heading>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
      <Button variant='solid' colorScheme='blue' ml='220'>
        View Info
      </Button>
  </CardFooter>
</Card>
    </div>
  )
}

export default CharacterCard
