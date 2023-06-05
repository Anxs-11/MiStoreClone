import React from 'react'
import Offer from "./Offer.js"
import "../styles/offers.css"
function offers({offers}){
  return (
    <div className='offersSection'>
        {offers.map((item,index)=>(
            <Offer key={item.image} index={index} src={item.image} link={item.url} />
        ))}
    </div>
  )
}

export default offers