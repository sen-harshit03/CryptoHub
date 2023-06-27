
import './App.css';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import CoinPage from './Pages/CoinPage';

function App() {
   

  return (
    <Router>
    <div className='main-app'>
    <Header></Header>
     <Routes>
       <Route path='/' element={<HomePage/>} exact />
       <Route path='/coins/:id' element={<CoinPage/>} />
     </Routes>
     </div>
   </Router>
  );
}

export default App;
