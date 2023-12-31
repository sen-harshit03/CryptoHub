import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import { AppProvider } from './AppContext';
import 'react-alice-carousel/lib/alice-carousel.css';





ReactDOM.render(
  <React.StrictMode>
  <ChakraProvider>
  <AppProvider>
    <App/>
  </AppProvider>
  </ChakraProvider>
  
  </React.StrictMode>,
  document.getElementById('root')
);

