import React from 'react'

function Planet({ planet }) {
  return (
    <div className="character-planet">
      <h4>{planet.name}</h4>
      <p>{planet.description}</p>
    </div>
  )
}

export default Planet
