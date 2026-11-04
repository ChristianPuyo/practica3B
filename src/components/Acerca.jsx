function acerca() {
  return (
    <section className="page">
      <h1>Acerca de</h1>
      <p>
        Esta es una aplicación de ejemplo construida con <strong>React</strong>{' '}
        y <strong>Vite</strong>, utilizando JavaScript puro (sin TypeScript).
      </p>
      <ul className="info-list">
        <li>⚛️ React 19</li>
        <li>⚡ Vite 8</li>
        <li>🧭 React Router DOM 7 (navegación por rutas)</li>
        <li>🌐 Consumo de una API externa pública (PokeAPI)</li>
      </ul>
      <p>
        El objetivo de la práctica es demostrar el ruteo entre vistas y el
        consumo de datos remotos para renderizar tarjetas (cards).
      </p>
    </section>
  )
}

export default acerca
