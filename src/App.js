import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Principal from "./pages/principal";
import About from "./pages/about";
import Reseñas from "./pages/reseñas";
import { useEffect, useState } from "react";

function App() {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch("https://x8ki-letl-twmt.n7.xano.io/api:3L2D00wW/review")
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta API:", data);
        // Aseguramos que sea un array
        setReview(Array.isArray(data) ? data : []);
      })
      .catch((error) => {
        console.error("Error al obtener reseñas:", error);
      });
  }, []); // 👈 solo se ejecuta una vez

  return (
    <BrowserRouter>
      <div>
        <h2>Reseñas</h2>
        <ul>
          {review.length > 0 ? (
            review.map((item) => (
              <li key={item.id}>
                <h1>{item.name_game}</h1>
                <h3>{item.score}</h3>
                <p>{item.review_text}</p>
                <h4>Autor: {item.author_name}</h4>
                
              </li>
            ))
          ) : (
            <p>No hay reseñas disponibles.</p>
          )}
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/about" element={<About />} />
        <Route path="/reseñas" element={<Reseñas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
