import { NavLink } from 'react-router-dom'


function navbar() {
  const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')

  return (
    <nav className="navbar">
      <span className="navbar-brand">Practica3B</span>
      <div className="navbar-links">
        <NavLink to="/" end className={linkClass}>
          Inicio
        </NavLink>
        <NavLink to="/acerca" className={linkClass}>
          Acerca de
        </NavLink>
        <NavLink to="/pokemons" className={linkClass}>
          Pokémons
        </NavLink>
      </div>
    </nav>
  )
}

export default navbar
