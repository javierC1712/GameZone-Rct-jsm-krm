import { useEffect, useState } from "react";
import '../css/reseñas.css';// 👈 Importa el CSS

function Reseñas() {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("https://x8ki-letl-twmt.n7.xano.io/api:3L2D00wW/review")
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta API:", data);
        setReview(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error("Error al obtener reseñas:", error);
      });
  }, []);

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
