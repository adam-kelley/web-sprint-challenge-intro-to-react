import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  const [characters, setCharacters] = useState([])
  const [planets, setPlanets] = useState([])

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(urlPeople)
        setCharacters(response.data)
      } catch (error) {
        console.error('Error fetching characters:', error)
      }
    }

    const fetchPlanets = async () => {
      try {
        const response = await axios.get(urlPlanets)
        setPlanets(response.data)
      } catch (error) {
        console.error('Error fetching planets:', error)
      }
    }

    fetchCharacters()
    fetchPlanets()
  }, [])

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {characters.map(character => {
        const planet = planets.find(planet => planet.id === character.homeworld)
        return <Character key={character.name} character={character} planet={planet} />
      })}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
