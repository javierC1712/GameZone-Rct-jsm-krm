import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [nombre, setNombre] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const validarFormulario = (e) => {
    e.preventDefault()

    const usuarioCorrecto = 'Javier Candia'
    const contrasenaCorrecta = '123456789'

    if (nombre === usuarioCorrecto && password === contrasenaCorrecta) {
      alert('¡Bienvenido!')
      navigate('/principal') // redirige a la página principal
    } else {
      alert('Nombre de usuario o contraseña incorrectos.')
    }
  }

  return (
    <div className="card text-center p-4" style={{ maxWidth: '400px', margin: '100px auto' }}>
      <img src="/images/juegos.jpg" alt="Juego Gamer" className="img-fluid mb-3 rounded" />

      <h2 className="mb-3">Formulario de registro</h2>

      <form onSubmit={validarFormulario}>
        <div className="mb-3 text-start">
          <label htmlFor="Nombre" className="form-label">Nombre</label>
          <input
            type="text"
            id="Nombre"
            name="Nombre"
            placeholder="Ingrese su nombre"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div className="mb-3 text-start">
          <label htmlFor="Password" className="form-label">Contraseña</label>
          <input
            type="password"
            id="Password"
            name="Password"
            placeholder="Ingrese su contraseña"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  )
}

export default Login
