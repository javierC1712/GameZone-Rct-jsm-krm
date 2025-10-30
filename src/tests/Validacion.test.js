// tests/validateLogin.test.js
import Principal from '../pages/principal.jsx'; // o el componente que estés probando
function validateLogin(username, password) {
  if (!username || !password) return false;
  return username === 'admin' && password === '1234';
}

describe('Función validateLogin', () => {
  it('debería retornar false si los campos están vacíos', () => {
    expect(validateLogin('', '')).toBeFalse();
  });

  it('debería retornar true con credenciales correctas', () => {
    expect(validateLogin('admin', '1234')).toBeTrue();
  });

  it('debería retornar false con credenciales incorrectas', () => {
    expect(validateLogin('user', 'wrong')).toBeFalse();
  });
});
