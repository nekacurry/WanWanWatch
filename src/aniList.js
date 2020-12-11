import React from 'react'
import data from './anime_list.json'
import AniSpace from './aniSpace.js'
import './aniList.css'

function AniList() {

  const spaces = data.map(( { title, image, year, type, genre, desc } ) => {
    return (
        <AniSpace 
        title={title}
        image={image}
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