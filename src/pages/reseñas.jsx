import { useEffect, useState } from "react";
import '../css/reseñas.css';

function Reseñas() {
  const [review, setReview] = useState([]);

  // Estado para el formulario POST
  const [nuevaReseña, setNuevaReseña] = useState({
    review_text: "",
    score: "",
    author_name: "",
    name_game: ""
  });

  // GET: obtener reseñas
  useEffect(() => {
    fetch("https://x8ki-letl-twmt.n7.xano.io/api:3L2D00wW/review")
      .then((response) => response.json())
      .then((data) => {
        setReview(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error("Error al obtener reseñas:", error);
      });
  }, []);

  // DELETE: eliminar reseña
  function eliminarReseña(id) {
    fetch(`https://x8ki-letl-twmt.n7.xano.io/api:3L2D00wW/review/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        setReview(prev => prev.filter(item => item.id !== id));
      })
      .catch((error) => {
        console.error("Error al eliminar reseña:", error);
      });
  }

  // POST: crear reseña
  function crearReseña() {
    fetch("https://x8ki-letl-twmt.n7.xano.io/api:3L2D00wW/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...nuevaReseña,
        score: parseInt(nuevaReseña.score),
        user_id: 1,
        juego_id: 1
      })
    })
      .then((res) => res.json())
      .then((data) => {
        setReview(prev => [...prev, data]);
        setNuevaReseña({
          review_text: "",
          score: "",
          author_name: "",
          name_game: ""
        });
      })
      .catch((error) => {
        console.error("Error al crear reseña:", error);
      });
  }

  return (
    <div className="reseñas-container">
      <h1>Reseñas</h1>

      <div className="reseñas-grid">
        {review.length > 0 ? (
          review.map((item) => (
            <div key={item.id} className="reseña-card">
              <h2 className="reseña-title">{item.name_game}</h2>
              <h3>{item.score} ⭐</h3>
              <p>{item.review_text}</p>
              <h4>Autor: {item.author_name}</h4>

              <button
                className="boton-eliminar"
                onClick={() => eliminarReseña(item.id)}
              >
                Eliminar Reseña
              </button>
            </div>
          ))
        ) : (
          <p>No hay reseñas disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default Reseñas;
