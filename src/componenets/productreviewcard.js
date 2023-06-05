import React from 'react'
import "../styles/productreviewcard.css"
function productreviewcard({image,index,name,review,price}) {
  return (
      <div className='productreviewcard'>
        <img src={image} alt={`${index} review`} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
      </div>
  )
}

export default productreviewcard