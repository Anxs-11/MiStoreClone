import React from 'react'
import ProductReviewCard from "./productreviewcard.js"
import "../styles/productreviews.css"
function productreviews({Productreviews}) {
  return (
      <div className='productreviews'>
          {Productreviews.map((item, index) => (
              <ProductReviewCard key={item.name} name={item.name} image={item.image} review={item.review} index={index} price={item.price} />
        ))}
      </div>
  )
}

export default productreviews