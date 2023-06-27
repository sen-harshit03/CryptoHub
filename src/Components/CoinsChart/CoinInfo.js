import { Box, Button, Spinner } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../AppContext";
import { HistoricalChart } from "../../config/api";
// import { Line } from 'react-chartjs-2';
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PieController,
} from "chart.js";
import { chartDays } from "../../config/data";
import { Select } from "@material-ui/core";
import SelectButton from "./SelectButton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CoinInfo = ({ coin }) => {
  const [historicalData, setHistoricalData] = useState();
  const [days, setDays] = useState(1);

  const { currency, symbol } = useGlobalContext();

  const fetchCoinHistory = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setHistoricalData(data.prices);
  };

  useEffect(() => {
    fetchCoinHistory();
  }, [days, currency]);

  console.log(historicalData);

  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100%"}
    >
      {!historicalData ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <>
          <Line
            data={{
              labels: historicalData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;

                   return days === 1 ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: historicalData.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days ) in ${currency}`,
                  borderColor: "#3182ce",
                },
              ],
            }}
            options={{
              elements: {
                radius: 1,
              },
            
            }}
          />

          <Box display={"flex"} mt={"6"} justifyContent={"space-evenly"} width={"100%"} >
            {chartDays.map((day) => {
              return <SelectButton
              key={day.value}
              onClick={()=> setDays(day.value)}
              selected={day.value === days}
              >{day.label}</SelectButton>;
            })}
          </Box>
        </>
      )}
    </Box>
  );
};

export default CoinInfo;
