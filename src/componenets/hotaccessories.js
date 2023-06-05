import React from 'react'
import HotitemCard from "./hotitemcard.js"
import "../styles/hotaccessories.css"
function hotaccessories({ items,Cover}) {
  return (
    <div className='hotaccessories'>
        <div>
            <img src={Cover} alt="Cover" />
        </div>
        <div>
            {items.map((item,index)=>(
                <HotitemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))}
              <HotitemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
            
        </div>
    </div>
  )
}

export default hotaccessories