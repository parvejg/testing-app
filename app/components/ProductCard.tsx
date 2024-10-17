import React from 'react'
import { AddToCart } from './AddToCart';

export const ProductCard = () => {
  return (<div>
      <h1 className='p-5 my-6 bg-sky-400 text-white text-xl hover:bg-sky-500 text-xl'>productCard</h1>
    <AddToCart/>
    <button className='btn btn-secondary'>Daisy ui btn</button>
    </div>
  )
}
