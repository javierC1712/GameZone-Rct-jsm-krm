import React from 'react';
import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import Login from '../pages/login.jsx';

describe('Componente Login', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('debería renderizar el formulario de login', (done) => {
    const root = createRoot(container);
    root.render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    setTimeout(() => {
      const content = container.textContent;
      expect(content).toContain('Formulario de registro');
      expect(content).toContain('Contraseña');
      expect(content).toContain('Login');
      done();
    }, 50); // ⏱️ da tiempo suficiente para que React renderice
  });
});
