import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const validarFormulario = (e) => {
    e.preventDefault()

    const usuarioCorrecto = 'Javier Candia'
    const contrasenaCorrecta = '123456789'

    if (correo === usuarioCorrecto && password === contrasenaCorrecta) {
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
          <label htmlFor="Correo" className="form-label">Correo</label>
          <input
            type="text"
            id="Correo"
            name="Correo"
            placeholder="Ingrese su correo"
            className="form-control"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
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
