import React from 'react'
import Collection from '../common/collection'
import NextArrow from '../common/carousel/nextArrow';
import PrevArrow from '../common/carousel/prevArrow';
import { Dining } from './../../data/dining';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter,faTruck } from '@fortawesome/free-solid-svg-icons';
import Filters from '../filters';
import ExploreSection from '../exploresection';
const CollectionList=[
  {
      id:'1',
      title:'trending this week',
      cover:"data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAyADIDASIAAhEBAxEB/8QAHAABAAICAwEAAAAAAAAAAAAAAAMEAgYFBwgB/8QALhAAAQMDAgIIBwEAAAAAAAAAAAECAwQFEQeRBjESExQ0UVNxgRUiIzIzQlJh/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBA//EABkRAQADAQEAAAAAAAAAAAAAAAABESESQf/aAAwDAQACEQMRAD8A9Ugi7TD5jdz6k8S8nt3AkBGs8afum4SeJeT27gSAw61n9IYrURJze3cCUEXaYfMbuAPEFNrLeMfPO7c2G06s3SZqfUcq+p1hTabX50zUdTSYz4Ha3Cum1RDTR9bA7p/6gq1xKe46k3xIOmxXIhBatTb06VqyvfjJzvEPBlYyhRkFOqqieBwlq4Sr1ajZKVyL44MrxeTrbG6j1zoUy9UXBqHEep92pnOWOZceovfC11jVG08D9jTbzwZf6he7SL7HW4ceZWV1ivefzO3BrS6e37PdJNgZg9+JaKJOUDNiZlDTt+2NqexZBArvooHph0bV9jBttpWrlIm7FsAU3W2lcuViavsYraqNecDNi8AKHwii8hmwL4AAAAAAAAAAAD//2Q==",
      places:"12 places"
  },
  {
      id:'2',
      title:'13 Newly opend this week',
      cover:"data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAyADIDASIAAhEBAxEB/8QAHAABAAICAwEAAAAAAAAAAAAAAAMEAgYFBwgB/8QALhAAAQMDAgIIBwEAAAAAAAAAAAECAwQFEQeRBjESExQ0UVNxgRUiIzIzQlJh/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBA//EABkRAQADAQEAAAAAAAAAAAAAAAABESESQf/aAAwDAQACEQMRAD8A9Ugi7TD5jdz6k8S8nt3AkBGs8afum4SeJeT27gSAw61n9IYrURJze3cCUEXaYfMbuAPEFNrLeMfPO7c2G06s3SZqfUcq+p1hTabX50zUdTSYz4Ha3Cum1RDTR9bA7p/6gq1xKe46k3xIOmxXIhBatTb06VqyvfjJzvEPBlYyhRkFOqqieBwlq4Sr1ajZKVyL44MrxeTrbG6j1zoUy9UXBqHEep92pnOWOZceovfC11jVG08D9jTbzwZf6he7SL7HW4ceZWV1ivefzO3BrS6e37PdJNgZg9+JaKJOUDNiZlDTt+2NqexZBArvooHph0bV9jBttpWrlIm7FsAU3W2lcuViavsYraqNecDNi8AKHwii8hmwL4AAAAAAAAAAAD//2Q==",
      places:"13 places"
  },
  {
      id:'3',
      title:'9 unique dining Experience',
      cover:"data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAyADIDASIAAhEBAxEB/8QAHAABAAICAwEAAAAAAAAAAAAAAAMEAgYFBwgB/8QALhAAAQMDAgIIBwEAAAAAAAAAAAECAwQFEQeRBjESExQ0UVNxgRUiIzIzQlJh/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBA//EABkRAQADAQEAAAAAAAAAAAAAAAABESESQf/aAAwDAQACEQMRAD8A9Ugi7TD5jdz6k8S8nt3AkBGs8afum4SeJeT27gSAw61n9IYrURJze3cCUEXaYfMbuAPEFNrLeMfPO7c2G06s3SZqfUcq+p1hTabX50zUdTSYz4Ha3Cum1RDTR9bA7p/6gq1xKe46k3xIOmxXIhBatTb06VqyvfjJzvEPBlYyhRkFOqqieBwlq4Sr1ajZKVyL44MrxeTrbG6j1zoUy9UXBqHEep92pnOWOZceovfC11jVG08D9jTbzwZf6he7SL7HW4ceZWV1ivefzO3BrS6e37PdJNgZg9+JaKJOUDNiZlDTt+2NqexZBArvooHph0bV9jBttpWrlIm7FsAU3W2lcuViavsYraqNecDNi8AKHwii8hmwL4AAAAAAAAAAAD//2Q==",
      places:"18 places"
  },
  {
      id:'4',
      title:'25 serene Rooftop places',
      cover:"data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAyADIDASIAAhEBAxEB/8QAHAABAAICAwEAAAAAAAAAAAAAAAMEAgYFBwgB/8QALhAAAQMDAgIIBwEAAAAAAAAAAAECAwQFEQeRBjESExQ0UVNxgRUiIzIzQlJh/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBA//EABkRAQADAQEAAAAAAAAAAAAAAAABESESQf/aAAwDAQACEQMRAD8A9Ugi7TD5jdz6k8S8nt3AkBGs8afum4SeJeT27gSAw61n9IYrURJze3cCUEXaYfMbuAPEFNrLeMfPO7c2G06s3SZqfUcq+p1hTabX50zUdTSYz4Ha3Cum1RDTR9bA7p/6gq1xKe46k3xIOmxXIhBatTb06VqyvfjJzvEPBlYyhRkFOqqieBwlq4Sr1ajZKVyL44MrxeTrbG6j1zoUy9UXBqHEep92pnOWOZceovfC11jVG08D9jTbzwZf6he7SL7HW4ceZWV1ivefzO3BrS6e37PdJNgZg9+JaKJOUDNiZlDTt+2NqexZBArvooHph0bV9jBttpWrlIm7FsAU3W2lcuViavsYraqNecDNi8AKHwii8hmwL4AAAAAAAAAAAD//2Q==",
      places:"20 places"
  },
  {
      id:'5',
      title:'21 Romantic dining Places',
      cover:"data:image/jpg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAyADIDASIAAhEBAxEB/8QAHAABAAICAwEAAAAAAAAAAAAAAAMEAgYFBwgB/8QALhAAAQMDAgIIBwEAAAAAAAAAAAECAwQFEQeRBjESExQ0UVNxgRUiIzIzQlJh/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAIBA//EABkRAQADAQEAAAAAAAAAAAAAAAABESESQf/aAAwDAQACEQMRAD8A9Ugi7TD5jdz6k8S8nt3AkBGs8afum4SeJeT27gSAw61n9IYrURJze3cCUEXaYfMbuAPEFNrLeMfPO7c2G06s3SZqfUcq+p1hTabX50zUdTSYz4Ha3Cum1RDTR9bA7p/6gq1xKe46k3xIOmxXIhBatTb06VqyvfjJzvEPBlYyhRkFOqqieBwlq4Sr1ajZKVyL44MrxeTrbG6j1zoUy9UXBqHEep92pnOWOZceovfC11jVG08D9jTbzwZf6he7SL7HW4ceZWV1ivefzO3BrS6e37PdJNgZg9+JaKJOUDNiZlDTt+2NqexZBArvooHph0bV9jBttpWrlIm7FsAU3W2lcuViavsYraqNecDNi8AKHwii8hmwL4AAAAAAAAAAAD//2Q==",
      places:"27 places"
  },
]

const diningFilters=[{
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

const diningList=Dining
const DiningOut = () => {
  return (
    <div>
        <Collection list={CollectionList}/>
        <div className='max-width'>
          <Filters filters={diningFilters}/>
        </div>
        <ExploreSection list={diningList} collectionName="Dine-Out Restaurants in Dharmavaram"/>
      </div>
  )
}

export default DiningOut
