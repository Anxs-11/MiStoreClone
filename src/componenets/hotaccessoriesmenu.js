import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/hotaccessoriesmenu.css"
function hotaccessoriesmenu() {
  return (
      <div className='hotaccessoriesmenu'>
        <Link className='hotaccessorieslink' to="/music">Music Store</Link>
        <Link className='hotaccessorieslink' to="/smartDevices">Smart Devices</Link>
        <Link className='hotaccessorieslink' to="/home">Home</Link>
        <Link className='hotaccessorieslink' to="/lifestyle">LifeStyle</Link>
        <Link className='hotaccessorieslink' to="/mobileAccessories">Mobile Accessories</Link>
      
      </div>
  )
}

export default hotaccessoriesmenu