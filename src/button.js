import React from 'react'
import StripeButton from './stripeButton'

import {Link} from 'react-router-dom';

const Button = () => {
  return (
    <div className='checkout'>
        <Link to=''>
      <StripeButton price={3000}/>
      </Link>
    </div>
  )
}

export default Button
