// Selecciono los elementos del DOM que necesito
const memeImage = document.getElementById('meme-image');
const playButton = document.getElementById('play-button');
const messageContainer = document.getElementById('message-container');

// Creo un objeto Audio para reproducir el audio
const audio = new Audio('manco.mp3');

// Agrego un evento de click a la imagen del meme
memeImage.addEventListener('click', () => {
  // Muestro el contenedor del mensaje y reproduzco el audio
  messageContainer.classList.remove('hidden');
  audio.play();
});

// Agrego un evento de click al botón
playButton.addEventListener('click', () => {
  // Muestro el contenedor del mensaje y reproduzco el audio
  messageContainer.classList.remove('hidden');
  audio.play();
});