import {
  Box,
  Container,
  HStack,
  Image,
  Img,
  VStack,
  Text,
  Spinner,
} from "@chakra-ui/react";
import { LinearProgress } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../AppContext";
import CoinInfo from "../Components/CoinsChart/CoinInfo";
import { SingleCoin } from "../config/api";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const { currency, symbol, numberWithCommas } = useGlobalContext();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
  }, []);

  const parse = require('html-react-parser');

  if (!coin) return <Spinner size={"xl"} position={"relative"} top={"50%"} left={"50%"}/>;

  console.log(coin);
  return (
    <Box
      mt={"4"}
      display={"flex"}
      className="coinpage"
    >
      <VStack
        width={"30%"}
        height={"100vh"}
        className="coinsidebar"
        padding={"2"}
        
      >
        <Image
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          marginBottom={"2"}
        />

        <Text fontSize={"3xl"} fontWeight={"bold"}>
          {coin?.name}
        </Text>
        <Text>{parse(coin?.description.en.split(". ")[0])}.</Text>

        <VStack
          justifyContent={"flex-start"}
          w={"100%"}
        >
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            width={"100%"}
          >
            <Text fontSize={"lg"} fontWeight={"bold"} ml={"2"}>
              Rank:
            </Text>
            <Text fontSize={"lg"} ml={2}>
              {coin?.market_cap_rank}
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
          
            width={"100%"}
          >
            <Text fontSize={"lg"} fontWeight={"bold"} ml={"2"}>
              Price:
            </Text>
            <Text fontSize={"lg"} ml={2}>
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Text>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            width={"100%"}
          >
            <Text fontSize={"lg"} fontWeight={"bold"} ml={"2"}>
              Market Cap:
            </Text>
            <Text fontSize={"lg"} ml={2}>
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
              )}
            </Text>
          </Box>
        </VStack>
      </VStack>
      <div style={{height: "90vh", border: "1px solid grey" , width: "2px"}}></div>
      <Box width={"70%"} ml={"3"}>
        <CoinInfo coin={coin}></CoinInfo>
      </Box>
    </Box>
  );
};

export default CoinPage;
