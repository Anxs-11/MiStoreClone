import React from 'react'
import VideoCard from "./videocard.js"
import "../styles/videos.css"
function videos({videos}) {
  return (
      <div className='videos'>
        {videos.map((item,index)=>(
            <VideoCard index={index} key={item.image} image={item.image} name={item.name}/>
        ))}
      </div>
  )
}

export default videos