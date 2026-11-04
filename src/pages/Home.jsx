import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

function Home() {
  return (
    <section className="page">
      <div className="hero-logos">
        <img src={viteLogo} className="vite" alt="Vite logo" />
        <img src={reactLogo} className="framework" alt="React logo" />
      </div>
      <h1>Práctica 3B</h1>
      <p>
        Proyecto de React (JavaScript) creado con Vite. Usa{' '}
        <code>react-router-dom</code> para navegar entre tres rutas: Inicio,
        Acerca de y Pokémons.
      </p>
      <p>
        Ve a la pestaña <strong>Pokémons</strong> para ver las tarjetas
        obtenidas desde una API externa gratuita.
      </p>
    </section>
  )
}

export default Home
