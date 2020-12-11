import React from 'react'
//import Like from './Like.js'
import './aniSpace.css'


function AniSpace(props) {
  const { title, image, year, type, genre, desc  } = props
  return (
    <div className="aniSpace">
      <img  src={`${process.env.PUBLIC_URL}images/${image}`}     
        height="500"
        alt= " "
      />
      
      <div className="overlay">
        <h1>{title}</h1>
        <div>{year}</div>
        <div>{type}</div>
        <div>{genre}</div>
        <div>★</div>
        <div className="desc">{desc}</div>
      </div>
    </div>
    
  )
}

export default AniSpace