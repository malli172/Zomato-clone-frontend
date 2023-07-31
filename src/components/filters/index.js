import React from 'react'
import './filters.css';
import FilterItem from './filteritem';


const Filters = ({filters}) => {
  return (
    <div className='filters'>
      {filters && filters.map((filter) => {
        return <FilterItem filter={filter} key={filter.id}/>
      })}
    </div>
  )
}

export default Filters
