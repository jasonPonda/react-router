import React from 'react'
import Informatique from './informatique'
import Construction from './construction'

const services = () => {
  return (
    <div className='services'>
    <h1>Nos services</h1>
    <Informatique />
    <Construction />
    </div>
  )
}

export default services