import { AspectRatio, border, Box, color, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'

// import { Box, Container, Grid } from '@material-ui/core'
import React from 'react'
import { useGlobalContext } from '../../AppContext'
import { TrendingCoins } from '../../config/api';
import axios from "axios"
import { useState } from 'react';
import { useEffect } from 'react';
import AliceCarousel from "react-alice-carousel"
import { Link } from 'react-router-dom';



const Banner = () => {
    const { currency, symbol, numberWithCommas } = useGlobalContext();
    const [trending, setTrending] = useState([]);

    //fetch data starts
    const fetchTrending = async () => {
        const { data } = await axios.get(TrendingCoins(currency))
        setTrending(data);
    }
    console.log(trending);
    useEffect(() => {
        fetchTrending();
    }, [currency])
    //fetch data ends

    // Link to={`/coins/${coin.id}`}
    const items = trending.map((coin) => {
        let profit = coin.price_change_percentage_24h
        console.log(profit);
        return (
            <Box key={coin.id} flexDirection='column' >

                <Image
                    borderRadius='full'
                    boxSize='120px'
                    src={coin.image}
                    alt={coin.name}
                >
                </Image>
                  
    
                
                <Text mt='4'
                    fontFamily="Monteressat"
                    fontWeight='500'
                    fontSize='xl'
                    pl='10'
                    className=''
                >{coin.name + "  "}</Text>

                <Text
                    fontFamily="Monteressat"
                    fontWeight='700'
                    fontSize='l'
                    pl='10'
                >{symbol + " "}{numberWithCommas(coin.current_price)}</Text>

                 <Text mt='2'
                    fontFamily="Monteressat"
                    fontWeight='600'
                    fontSize='s'
                    pl='10'
                    className={`${profit >=0 ? 'tx-green' : 'tx-red'}`}
                >{profit.toFixed(2)} %</Text>

            </Box>
        )
    })

    const responsive = {
        0: {
            items: 4,
        },

        512: {
            item: 6,
        },
    }

    return (
        <Box h='300px' w='100vw'  mt='5rem'  boxShadow='lg' mb='10'>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                autoPlay
                items={items}

            ></AliceCarousel>
        </Box>
    )
}

export default Banner