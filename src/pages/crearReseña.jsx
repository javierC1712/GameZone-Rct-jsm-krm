import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/crearReseña.css';

function CrearReseña() {
  const navigate = useNavigate();

  const [nuevaReseña, setNuevaReseña] = useState({
    review_text: "",
    score: "",
    author_name: "",
    name_game: ""
  });

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
      .then(() => {
        navigate("/reseñas"); // redirige al listado
      })
      .catch((error) => {
        console.error("Error al crear reseña:", error);
      });
  }

  return (
    <div className="reseñas-container">
      <div className="formulario-container">
        <h2>Agregar nueva reseña</h2>

        <input
          type="text"
          placeholder="Nombre del juego"
          value={nuevaReseña.name_game}
          onChange={(e) =>
            setNuevaReseña({ ...nuevaReseña, name_game: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Texto de la reseña"
          value={nuevaReseña.review_text}
          onChange={(e) =>
            setNuevaReseña({ ...nuevaReseña, review_text: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Autor"
          value={nuevaReseña.author_name}
          onChange={(e) =>
            setNuevaReseña({ ...nuevaReseña, author_name: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Calificación"
          value={nuevaReseña.score}
          onChange={(e) =>
            setNuevaReseña({ ...nuevaReseña, score: e.target.value })
          }
        />

        <button className="boton-crear" onClick={crearReseña}>
          Crear reseña
        </button>
      </div>
    </div>
  );
}

export default CrearReseña;
