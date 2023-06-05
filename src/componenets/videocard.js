import React from 'react'
import "../styles/videocard.css"

const playbutton = <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M320-203v-560l440 280-440 280Zm60-280Zm0 171 269-171-269-171v342Z" /></svg>
function videocard({key,name,image,index}) {
  return (
      <div className='videocard' style={{backgroundImage:`url(${image})`}}>
        <a href="#/">{playbutton}</a>
        <p>{name}</p>

    </div>
  )
}

export default videocard