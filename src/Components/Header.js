// import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'
// import { AppBar, Container, Menu, MenuItem, Select, Toolbar, Typography, makeStyles } from "@material-ui/core"
import { useGlobalContext } from '../AppContext'
import { Box, HStack, Input, InputGroup, InputLeftAddon, Select, Text } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

// const useStyles = makeStyles(() => ({
//   title: {
//     flex: 1,
//     color: 'blue',
//     fontFamily: 'Montserrat',
//     fontWeight: "bold",
//     cursor: 'pointer',
//     fontSize: '1.8rem'
//   }
// }))
const Header = () => {

  const {currency, setCurrency, searchInput, setSearchInput} = useGlobalContext()

  console.log(currency);

  // const classes = useStyles()

  return (
    // <HStack color='blue' position='fixed' h="4rem">
     /* <Container>
       <Toolbar>
         <Typography className={classes.title}>Crypto</Typography>
         <Select 
         variant='outlined' 
         value={currency}
         onChange = {(e) => setCurrency(e.target.value)}
         style={
           {
             width: 100,
             height: 40,
             marginRight: 15,
           }
         }>
           <MenuItem value={'USD'}> $ USD</MenuItem>
           <MenuItem value={'INR'}> ₹ INR</MenuItem>

         </Select>
       </Toolbar>
     </Container> */
     <Flex bg="#ECF0F3" width="100vw" justifyContent="space-between" shadow="md" minHeight='4rem' alignItems='center'>
       <Box marginLeft="1.2rem"><Text fontSize='3xl' fontWeight='bold'>CryptoHub</Text></Box>
       {/* <Box border="2px solid red" alignItems="center" ><InputGroup mt='10'>
        <InputLeftAddon
          pointerEvents='none'
          h='3rem'
          children={<SearchIcon boxSize='1.6em' />} />

        <Input placeholder='Search your crypto here' size='lg' variant='outline' aria-label='Search your crypto here'
          value={searchInput} onChange={(e) => setSearchInput(e.target.value)}
        />
      </InputGroup></Box> */}
      <Box><Select
      variant='outline'
      shadow= 'lg'
      value={currency}
      onChange= {(e) => setCurrency(e.target.value)}
      >
        <option value={"USD"}>USD</option>
        <option value={"INR"}>INR</option>
      </Select></Box>
      <Box marginRight='1.5rem'>
      {/* <Button colorScheme='blue' variant='solid'>
      Sign In
      </Button> */}
      </Box>
     </Flex>



    // </HStack>
   
    
  )
}

export default Header