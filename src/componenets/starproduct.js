import React from 'react'
import "../styles/starProduct.css"
function starproduct({starproduct}) {
  return (
   <div className="starproduct">
    <div><a href={starproduct[0].url}><img src={starproduct[0].image} alt="1 product" /></a></div>
    <div>
        <a href={starproduct[1].url}><img src={starproduct[1].image} alt="2 product" /></a>
        <a href={starproduct[2].url}><img src={starproduct[2].image} alt="3 product" /></a>
        <a href={starproduct[3].url}><img src={starproduct[3].image} alt="4 product" /></a>
    </div>
   </div>
  )
}

export default starproduct