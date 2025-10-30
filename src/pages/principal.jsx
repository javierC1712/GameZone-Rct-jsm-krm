import { useState } from "react";
import '../css/principal.css';
import '../css/slider.css';
import "../App.css";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="principal-container">
        <header>
          <h1>Gamer Zone</h1>
          <p>Mi rincón Gamer en la web</p>
        </header>

        {/* Carrusel */}
        <div className="csslider1 autoplay">
          <input name="cs_anchor1" id="cs_slide1_0" type="radio" className="cs_anchor slide" />
          <input name="cs_anchor1" id="cs_slide1_1" type="radio" className="cs_anchor slide" />
          <input name="cs_anchor1" id="cs_slide1_2" type="radio" className="cs_anchor slide" />
          <input name="cs_anchor1" id="cs_play1" type="radio" className="cs_anchor" defaultChecked />
          <input name="cs_anchor1" id="cs_pause1" type="radio" className="cs_anchor" />

          <ul>
            <div style={{ width: "100%", visibility: "hidden", fontSize: 0, lineHeight: 0 }}>
              <img
                src="http://cssslider.com/sliders/pen/images/buns.jpg"
                alt="slider preload"
                style={{ width: "200%" }}
              />
            </div>

            <li className="num0 img">
              <a href="http://cssslider.com" target="_blank" rel="noreferrer">
                <img src="/images/clash-royale.webp" alt="Clash Royale" title="Clash Royale" width="200" />
              </a>
            </li>
            <li className="num1 img">
              <a href="http://cssslider.com" target="_blank" rel="noreferrer">
                <img src="/images/bf5.jpg" alt="Battlefield 5" title="Battlefield 5" />
              </a>
            </li>
            <li className="num2 img">
              <a href="http://cssslider.com" target="_blank" rel="noreferrer">
                <img src="/images/mortal.jpg" alt="Mortal Kombat 11" title="Mortal Kombat 11" />
              </a>
            </li>
          </ul>

          <div className="cs_description">
            <label className="num0">
              <span className="cs_title">
                <span className="cs_wrapper">Clash Royale</span>
              </span>
            </label>
            <label className="num1">
              <span className="cs_title">
                <span className="cs_wrapper">Battlefield 5</span>
              </span>
            </label>
            <label className="num2">
              <span className="cs_title">
                <span className="cs_wrapper">Mortal Kombat 11</span>
              </span>
            </label>
          </div>

          <div className="cs_arrowprev">
            <label className="num0" htmlFor="cs_slide1_0"></label>
            <label className="num1" htmlFor="cs_slide1_1"></label>
            <label className="num2" htmlFor="cs_slide1_2"></label>
          </div>

          <div className="cs_arrownext">
            <label className="num0" htmlFor="cs_slide1_0"></label>
            <label className="num1" htmlFor="cs_slide1_1"></label>
            <label className="num2" htmlFor="cs_slide1_2"></label>
          </div>

          <div className="cs_bullets">
            <label className="num0" htmlFor="cs_slide1_0">
              <span className="cs_point"></span>
              <span className="cs_thumb">
                <img src="#" alt="clash-royale" title="clash-royale" />
              </span>
            </label>
            <label className="num1" htmlFor="cs_slide1_1">
              <span className="cs_point"></span>
              <span className="cs_thumb">
                <img src="#" alt="bf5" title="bf5" />
              </span>
            </label>
            <label className="num2" htmlFor="cs_slide1_2">
              <span className="cs_point"></span>
              <span className="cs_thumb">
                <img src="#" alt="mortal" title="mortal" />
              </span>
            </label>
          </div>
        </div>

        {/* Juegos Favoritos */}
        <section className="Juegos">
          <h2>Mis juegos favoritos</h2>
          <ul>
            <li>Mortal Kombat 11</li>
            <li>Battlefield V</li>
            <li>Clash Royale</li>
          </ul>
        </section>

        {/* Botón interactivo */}
        <section className="interactivo">
          <button
            id="boton"
            onClick={() => alert("¡Eres un verdadero gamer! 🎮")}
            className="btn btn-primary"
          >
            Click aquí si eres gamer
          </button>
        </section>

        <Link to="/reseñas" className="btn-reseñas">Ir a Reseñas</Link>
        <Link to="/about" className="btn-about">Sobre mí</Link>
      </div> {/* ← AQUÍ SE CIERRA el div de principal-container */}
    </>
  );
}

export default App;
