import React from 'react'

const ItemCard = ({name, description, image, price}) => {
  return (
    <div className='flex items-center gap-4 p-10'>
    <div className='flex-1 p-4'>

    <img src={image} />
    </div>
    <div className='flex-1 grid gap-4'>
      <h2 className='font-bold text-4xl'>{name}</h2>
      <p>{description}</p>

   <p className='font-bold text-2xl'>{price}</p>
    </div>
   </div>
  )
}

export default ItemCard