import { AspectRatio, Button, ButtonGroup, Flex, Text, HStack, Box } from '@chakra-ui/react'
import React from 'react'


const Overview = () => {
    return (
        <HStack  minHeight='500px' p='10' marginTop='3rem' className='overview-cont'>
            {/* <Flex  flex='0.5' alignItems='center' justifyContent='center' flexDirection='column' border='2px solid blue'>
                <Text fontSize='4xl'
                    fontWeight='bold'
                    fontFamily='Montserrat'
                >
                    CryptoVerse
                </Text>
                


                <Text fontSize='l' lineHeight='1.5' letterSpacing='0.025em'>
                    Keep track of your profits, losses and portfolio valuation with our easy to use platform.
                </Text>
                <ButtonGroup mt='10' spacing={8}>
                    <Button colorScheme='blue' variant='solid'>
                        Sign Up
                    </Button>
                    <Button colorScheme='blue' variant='outline'>
                        Login
                    </Button>
                </ButtonGroup>

            </Flex> */}
            <Flex  className='wrapper' alignItems='center' justifyContent='center' flexWrap='wrap'>
              <Text fontSize='5xl' fontWeight='bold' padding='6' className='hero-txt'> Welcome to the world of Cryptos</Text><br />
            </Flex>
            <Flex  flexWrap='wrap'>
                <video autoPlay muted width="" height='' loop >
                    <source src="https://cdn.dribbble.com/users/551602/screenshots/13821694/media/5ac396afea76e8d7526be7259e1f37dc.mp4" />
                </video>
            </Flex>
        
        </HStack>


    )
}

export default Overview