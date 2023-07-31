import React from 'react'
import './collection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import NextArrow from '../carousel/nextArrow';
import PrevArrow from '../carousel/prevArrow';


const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots:true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const Collection = ({ list }) => {
    return (
        <div className='collection-wrapper '>
            <div className='max-width collection'>
                <div className='collection-title'>
                    Collections
                </div>
                <div className='collection-subtitle-row'>
                    <div className='collection-subtitle-text'>
                        Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends
                    </div>
                    <div className='collection-location'>
                        <div>All collections in Delhi NCR</div>

                        <FontAwesomeIcon icon={faCaretRight} className="absolute-center" />
                    </div>
                </div>
                <Slider {...settings}>
                    {list.map((item) => (
                        <div className='collection-cover'>
                            <img src={item.cover} className='collection-image' alt={item.title}></img>
                            <div className='gradient-bg'></div>
                            <div className='collection-card-title'>{item.title}</div>
                            <div className='collection-card-subtitle'>
                                <div>{item.places}</div>
                                <FontAwesomeIcon icon={faCaretRight} className="absolute-center" />
                            </div>
                        </div>

                    ))}
                </Slider>
            </div>

        </div>
    )
}

export default Collection
