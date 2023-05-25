import React, { useEffect } from 'react';
import './ParticlesEffect.scss';

const ParticlesEffect = () => {
  useEffect(() => {
    // Crear y animar las partículas aquí

    // Obtener el elemento body
    const body = document.querySelector('body');

    // Crear un número deseado de partículas
    const particlesCount = 200;
    const particles = [];

    for (let i = 0; i < particlesCount; i++) {
      // Crear un elemento div para representar una partícula
      const particle = document.createElement('div');
      particle.className = 'particle';

      // Generar una posición aleatoria en el cuerpo
      const positionX = Math.random() * window.innerWidth;
      const positionY = Math.random() * window.innerHeight;

      // Establecer la posición inicial de la partícula
      particle.style.left = `${positionX}px`;
      particle.style.top = `${positionY}px`;

      // Agregar la partícula al cuerpo
      body.appendChild(particle);

      particles.push({
        element: particle,
        posX: positionX,
        posY: positionY,
        speedX: Math.random() * 0.2 + 1,
        speedY: Math.random() * 0.2 + 1,
        directionX: Math.random() < 0.5 ? -1 : 1,
        directionY: Math.random() < 0.5 ? -1 : 1,
      });
    }

    // Animar las partículas
    const animateParticles = () => {
      particles.forEach((particle) => {
        // Actualizar las posiciones según las velocidades y direcciones
        particle.posX += particle.speedX * particle.directionX;
        particle.posY += particle.speedY * particle.directionY;

        // Comprobar si la partícula está fuera de los límites del cuerpo
        // y reposicionarla en el lado opuesto
        if (particle.posX > window.innerWidth || particle.posX < 0) {
          particle.directionX *= -1;
        }

        if (particle.posY > window.innerHeight || particle.posY < 0) {
          particle.directionY *= -1;
        }

        // Actualizar las posiciones de la partícula
        particle.element.style.left = `${particle.posX}px`;
        particle.element.style.top = `${particle.posY}px`;
      });

      // Ejecutar la animación en bucle
      requestAnimationFrame(animateParticles);
    };

    animateParticles();

    // Limpiar las partículas al desmontar el componente
    return () => {
      particles.forEach((particle) => {
        body.removeChild(particle.element);
      });
    };
  }, []);

  return null;
};

export default ParticlesEffect;