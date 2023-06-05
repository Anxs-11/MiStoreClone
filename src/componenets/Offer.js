import React from 'react'

function Offer({src,index,link}) {
  return (
    <a href={link}><img src={src} alt={`${index} offer`} /></a>
  )
}

export default Offer