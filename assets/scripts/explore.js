// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelector = document.getElementById('voice-select');
  const button = document.querySelector('button');
  const textInput = document.getElementById('text-to-speak');
  const image = document.querySelector('img');
  const synth = window.speechSynthesis;
  let voices = []

  

  function loadVoices() {
    voices = synth.getVoices();

    for (const voice of voices) {
      const option = document.createElement('option');

      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += " — DEFAULT";
      }
      
      
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelector.appendChild(option);
    }
  }

  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
  }
  
  loadVoices();

  button.addEventListener('click', playVoice);

  function playVoice() {
    const utterThis = new SpeechSynthesisUtterance(textInput.value);
    const selectedOption = voiceSelector.selectedOptions[0].getAttribute('data-name');

    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice
      }
    }

    // onstart / onend define handlers for what to do in start / end

    utterThis.onstart = () => {
      image.src = 'assets/images/smiling-open.png';
    };

    utterThis.onend = () => {
      image.src = 'assets/images/smiling.png';
    };

    synth.speak(utterThis);
  }

}