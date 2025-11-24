import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Principal from "./pages/principal";
import About from "./pages/about";
import Reseñas from "./pages/reseñas";

function App() {
  return (
    <BrowserRouter>
      {/* Menú de navegación */}


      {/* Definición de rutas */}
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
