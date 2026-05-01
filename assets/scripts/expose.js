// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const image = document.querySelector("")

  hornSelect.addEventListener("input", displayImageAndAudio);

  function displayImageAndAudio(e) {
    if (e.target.value == 'select') {
      
    }
  }
}