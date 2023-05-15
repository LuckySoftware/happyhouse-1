const containerparticulas = document.querySelector('.container-particulas');

// loop que crea 100 particulas
for (let i = 0; i < 100; i++) {
  const particulas = document.createElement('div');
  particulas.classList.add('particulas');
  particulas.style.top = Math.random() * 100 + '%';
  particulas.style.left = Math.random() * 100 + '%';
  particulas.style.animationDelay = Math.random() * 4 + 's';
  containerparticulas.appendChild(particulas);
}