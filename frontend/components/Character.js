import React, { useState } from 'react'
import Planet from './Planet'

function Character({ character, planet }) {
  const [showHomeworld, setShowHomeworld] = useState(false)

  const toggleHomeworld = () => {
    setShowHomeworld(prevState => !prevState)
  }

  return (
    <div className="character-card" onClick={() => setShowHomeworld(!showHomeworld)}>
      <h3 className="character-name">{character.name}</h3>
      {showHomeworld ? <Planet planet={planet} /> : null}
    </div>
  )
}

export default Character

