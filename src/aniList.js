import React from 'react'
import data from './AniData.json'
import AniSpace from './aniSpace.js'
import './aniList.css'

function AniList() {

  const spaces = data.map(( { title, images, year, type, genre, desc } ) => {
    return (
        <AniSpace 
        title={title}
        image={images}
        year={year}
        type={type}
        genre={genre}
        desc={desc}
      />
    )
  })

  return (
    <div className="aniList">
      { spaces }
    </div>
  )
}

export default AniList