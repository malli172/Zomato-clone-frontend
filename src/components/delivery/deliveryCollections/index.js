import React from 'react'
import './deliverycollections.css';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';
import DeliveryItem from './deliveryItem';

const deliveryItem=[
    {
        id:1,
        title:"Pizza",
        cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
        id:2,
        title:"Chole Bhature",
        cover:"https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png"
    },
    {
        id:3,
        title:"Burger",
        cover:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
        id:4,
        title:"Biriyani",
        cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
        id:5,
        title:"dosa",
        cover:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
    },
    {
        id:6,
        title:"Cake",
        cover:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
    },
    {
        id:7,
        title:"Thali",
        cover:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
    }
    
]
const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow:  <PrevArrow/>
  };

const DeliveryCollections = () => {
  return (
    <div className='delivery-collection'>
        <div className='max-width'>
            <div className='collection-title'>Eat What makes you happy</div>
            <Slider {...settings}>
                {deliveryItem.map((item) => {
                    return(
                        <div>
                            <DeliveryItem item={item}/>
                        </div>
                    )
                })}
            </Slider>
        </div>
    </div>
  )
}

export default DeliveryCollections
