import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';
import { CoinList } from './config/api';


const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [currency, setCurrency] = useState("INR");
    const [symbol, setSymbol] = useState("₹");
    const [searchInput, setSearchInput] = useState("")
    const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);

  }

    useEffect(() => {
       if(currency === "INR"){
           setSymbol("₹")
       }else if(currency === "USD"){
           setSymbol("$")
       }
    }, [currency])

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    

   return <AppContext.Provider value={{
       currency, setCurrency, symbol, setSymbol, numberWithCommas, searchInput, setSearchInput, loading, coins, setCoins, setLoading,
       fetchCoins
   }}>
       {children}
   </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}