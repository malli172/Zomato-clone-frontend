import React from 'react'
import './delivery.css' 
import Filters from '../filters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter,faTruck } from '@fortawesome/free-solid-svg-icons';
import DeliveryCollections from './deliveryCollections';
import TopBrands from './topbrands';
import ExploreSection from '../exploresection';
import { restaurants } from '../../data/restaurants';
const deliveryFilters=[{
  id:1,
  icon:<FontAwesomeIcon icon={faFilter} className='absolute-center'/>,
  title:"Filters",
},
{
  id:2,
  title:"Rating: 4.0+",
},
{
  id:3,
  title:"Safe and Hygenic",
},
{
  id:4,
  title:"Pure Veg",
},
{
  id:5,
  title:"Delivery Time",
  icon:<FontAwesomeIcon icon={faTruck}  className='absolute-center'/>,
},
{
  id:6,
  title:"Great Offers",
}
]

const restaurantsList=restaurants;
const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
      <Filters filters={deliveryFilters} className="absolute-center"/>
      </div>
      <DeliveryCollections/>
      <TopBrands/>'
      <ExploreSection list={restaurantsList} collectionName='Delivery Restaurants in Dharmavaram'/>
    </div>
  )
}

export default Delivery
