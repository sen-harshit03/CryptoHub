import React from 'react'
import { useGlobalContext } from '../../AppContext'
import { useState, useEffect } from 'react';
import { Box, Container, Spinner, Text, Input, InputLeftAddon, InputGroup, TableContainer, Table, Thead, Tr, Th, Flex, Tbody, Image, TabList } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
// import { Pagination } from '@mui/material';
import { Pagination } from '@material-ui/lab';

const CoinsTable = () => {
  const { currency, symbol, numberWithCommas, searchInput, setSearchInput,coins, setCoins,loading, setLoading, fetchCoins } = useGlobalContext();
  

  const navigate = useNavigate();
  const [page, setpage] = useState(1)

  // const [searchInput, setSearchInput] = useState("")



  console.log(coins);

  useEffect(() => {
    fetchCoins();
  }, [currency])

  const filterSearch = () => {
    return coins.filter((coin) => {
      return(
        coin.name.toLowerCase().includes(searchInput) ||
        coin.symbol.toLowerCase().includes(searchInput)
      )
    })
  }

  return (
    <Container minH='600px'  maxW='1000px' flexDirection='column' >

      <InputGroup mt='10'>
        <InputLeftAddon
          pointerEvents='none'
          h='3rem'
          children={<SearchIcon boxSize='1.6em' />} />

        <Input placeholder='Search your crypto here' size='lg' variant='outline' aria-label='Search your crypto here'
          value={searchInput} onChange={(e) => setSearchInput(e.target.value)}
        />
      </InputGroup>

      <TableContainer  minH='50rem'>
        {loading ? (
          <Spinner size='xl' />
        ) :
          <Table>
            <Thead>
              <Tr>
                <Th width='28rem'>Coin</Th>
                <Th>Price</Th>
                <Th>% Change</Th>
                <Th>Market Cap</Th>
              </Tr>
            </Thead>

            <Tbody >
            {/* {filterSearch().map((row) => {
               return(
                 <Tr>
                    <Th>dhfdi</Th>
                 </Tr>
               )
            })} */}
            
              {filterSearch()
              .slice((page - 1)*10, (page-1)*10 + 10)
              .map((row) => {
                
                return (
                  <Tr cursor={"pointer"}
                    onClick={() => navigate(`/coins/${row.id}`)}
                    key={row.id}
                  >
                  <Th>
                    <Flex flexDirection='row' alignItems='center'>
                    <Box  mr='10' >
                      <Image src={row.image} alt={row.name} h='50'></Image>
                    </Box>
                      <Flex direction='column'>
                        <Text>{row.name}</Text>
                        <Text>{row.symbol}</Text>
                      </Flex>
                       
                    </Flex>
                  </Th>
                  <Th>
                    {symbol }{numberWithCommas(row.current_price)}
                  </Th>
                  

                  <Th >
                  <Text className={`${ (row.market_cap_change_percentage_24h >=0) ? 'tx-green' : 'tx-red'}`}>
                  {row.market_cap_change_percentage_24h.toFixed(3)} %
                  </Text>
                  </Th>

                  <Th>
                    {numberWithCommas(row.market_cap)}
                  </Th>
                   
                   
                    
                  </Tr>
                  
                )

              })}
            </Tbody>

          </Table>
        }
      </TableContainer>

      <Pagination count={(filterSearch()?.length / 10).toFixed(0)} style={{display:"flex", width:"100%", justifyContent:"center", padding:"1.2rem"}}
      onChange={(_, value) => {
        setpage(value);
        window.scroll(0, 1150);
      }}
      ></Pagination>
    </Container>

  )
}

export default CoinsTable