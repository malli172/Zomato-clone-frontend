import React, { useState } from 'react'
import Header from '../../components/common/header'
import Delivery from './../../components/delivery/index';
import NightLife from './../../components/nightlife/index';
import DiningOut from './../../components/dinningOut/index';
import TabOption from '../../components/tab';

const HomePage = () => {
  const [active,setactive]=useState("Delivery")
  return (
    <div>
      <Header/>
       <TabOption active={active} setactive={setactive}/>
       {getScreen(active)}
    </div>
  )
}
 
const getScreen =(tab) => 
{
    switch(tab)
    {
        case "Delivery":
            return <Delivery/>
        case "Dining Out":
            return <DiningOut/>
        case "NightLife":
            return <NightLife/>
        default:
            return <Delivery/>
    }
}
export default HomePage
