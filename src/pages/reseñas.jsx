function Reseñas() {
  return (
    <div>
      {/* Encabezado */}
      <header className="bg-dark text-white text-center py-5">
        <h1 className="display-4">Reseñas de mis juegos favoritos</h1>
        <p className="lead">Mis opiniones personales sobre los títulos que más disfruto</p>
      </header>

      {/* Contenido principal */}
      <main className="container my-5">
        <div className="row g-4">
          
          {/* Reseña de Clash Royale */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm p-3">
              <h5 className="card-title text-center">Clash Royale</h5>
              <p className="card-text mt-3">
                Un juego de estrategia en tiempo real que combina la emoción de los duelos rápidos con la planificación de mazos.
                Su equilibrio entre habilidad y táctica lo convierte en uno de los títulos móviles más adictivos.
              </p>
            </div>
          </div>

          {/* Reseña de Mortal Kombat */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm p-3">
              <h5 className="card-title text-center">Mortal Kombat</h5>
              <p className="card-text mt-3">
                Uno de los juegos de lucha más emblemáticos, con combates intensos y un estilo visual inconfundible.
                Su brutalidad y variedad de personajes lo hacen un clásico que sigue evolucionando con cada entrega.
              </p>
            </div>
          </div>

          {/* Reseña de Battlefield V */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm p-3">
              <h5 className="card-title text-center">Battlefield V</h5>
              <p className="card-text mt-3">
                Con un enfoque cinematográfico y batallas masivas llenas de acción, Battlefield V ofrece una experiencia de guerra realista.
                Su jugabilidad táctica y sus escenarios impresionantes lo hacen destacar dentro del género FPS.
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>&copy; 2025 Mi Rincón del Juego | Todas las reseñas son opiniones personales.</p>
      </footer>
    </div>
  )
}

export default Reseñas
