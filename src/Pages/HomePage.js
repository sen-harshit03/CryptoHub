import React from 'react'
import Banner from '../Components/Banner/Banner'
import CoinsTable from '../Components/CoinsTable/CoinsTable'
import Overview from '../Components/Overview'

const HomePage = () => {
  return (
    <div>
        <Overview></Overview>
        <Banner></Banner>
        <CoinsTable></CoinsTable>
    </div>
  )
}

export default HomePage