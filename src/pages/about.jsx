import '../css/about.css';



function About() {
  return (
    <div style={styles.body}>
      <main style={styles.main}>
        <div>
          <h1 style={styles.h1}>Sobre mí</h1>
          <p style={styles.p}>
            ¡Hola! 👋 Soy el creador de <strong>“Mi Rincón del Juego”</strong>.  
            Esta página nació de mi pasión por los videojuegos y las experiencias que estos nos hacen vivir.  
            Me encanta explorar mundos nuevos, disfrutar de buenas historias y compartir mis juegos favoritos con otros jugadores.  
            <br /><br />
            Aquí encontrarás reseñas, curiosidades y mucho más del universo gamer 🎮.
          </p>
        </div>
      </main>

      <footer style={styles.footer}>
        &copy; 2025 Mi Rincón del Juego — Creado con ❤️ por un verdadero gamer.  
        <br />
        <a href="/principal" style={styles.link}>Volver al inicio</a>
      </footer>
    </div>
  )
}

export default About
