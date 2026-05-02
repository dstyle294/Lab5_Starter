// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img[alt="No image selected"]');
  const volumeImage = document.querySelector('img[alt="Volume level 2"]');
  const audio = document.querySelector('audio');
  const slider = document.getElementById('volume');
  const button = document.querySelector('button');

  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener("input", displayImageAndAudio);

  slider.addEventListener("input", changeVolume);

  button.addEventListener("click", playAudio);

  function displayImageAndAudio(e) {
    if (e.target.value == 'select') {
      hornImage.src = 'assets/image/no-image.png';
      audio.src = '';
    } else {
      hornImage.src = `assets/images/${e.target.value}.svg`;
      audio.src = `assets/audio/${e.target.value}.mp3`;
    }
  }

  function changeVolume(e) {
    const newVolume = e.target.value;

    if (newVolume == 0) {
      volumeImage.src = 'assets/icons/volume-level-0.svg';
    } else if (newVolume < 33) {
      volumeImage.src = 'assets/icons/volume-level-1.svg';
    } else if (newVolume < 67) {
      volumeImage.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeImage.src = 'assets/icons/volume-level-3.svg';
    }

    audio.volume = newVolume / 100;
  }

  function playAudio() {
    audio.play();

    if (hornSelect.value == 'party-horn') {
      jsConfetti.addConfetti();
    }
  }
}