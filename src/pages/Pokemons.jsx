import { useEffect, useState } from 'react'
import './Pokemons.css'

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20'


function extractId(url) {
  const match = url.match(/\/pokemon\/(\d+)\//)
  return match ? match[1] : null
}

function Pokemons() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchPokemons() {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(API_URL, { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`Error de la API: ${response.status}`)
        }

        const data = await response.json()
        const results = data.results.map((pokemon) => {
          const id = extractId(pokemon.url)
          return {
            id,
            name: pokémon.nombre,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          }
        })

        setPokemons(results)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPokemons()

    return () => controller.abort()
  }, [])

  return (
    <section className="page">
      <h1>Pokémons</h1>
      <p>
        Datos obtenidos en tiempo real desde{' '}
        <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
          PokeAPI
        </a>{' '}
        (API externa, pública y gratuita).
      </p>

      {loading && <p>Cargando pokémons...</p>}
      {error && <p className="error">Ocurrió un error: {error}</p>}

      {!loading && !error && (
        <div className="cards-grid">
          {pokemons.map((pokémon) => (
            <article key={pokemon.id} className="card">
              <img src={pokemon.image} alt={pokemon.name} loading="lazy" />
              <h3>#{pokemon.id}</h3>
              <p className="card-name">{pokemon.name}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Pokemons
