import React from 'react';
import { createRoot } from 'react-dom/client';
import About from '../pages/about.jsx';

describe('Componente About', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('debería mostrar el texto de la sección About', (done) => {
    const root = createRoot(container);
    root.render(<About />);

    setTimeout(() => {
      const content = container.textContent;
      expect(content).toContain('Sobre mí');
      expect(content).toContain('reseñas');
      done();
    }, 50); // ⏱️ da tiempo suficiente para que React renderice
  });
});
