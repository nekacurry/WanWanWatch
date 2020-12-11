import React from 'react'
//import Like from './Like.js'
import './aniSpace.css'


function AniSpace(props) {
  const { title, image, year, type, genre, desc  } = props
  return (
    <div className="aniSpace">
      <img src={`${process.env.PUBLIC_URL}images/${image}`}      
        width="300" 
        height="300" 
        alt= " "
      />
      <h1>{title}</h1>
      <div>{year}</div>
      <div>{type}</div>
      <div>Genre: {genre}</div>
      <div>{desc}</div>
    </div>
    
  )
}

export default AniSpace