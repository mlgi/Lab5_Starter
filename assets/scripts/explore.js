// explore.js

window.addEventListener('DOMContentLoaded', init);

var synth = window.speechSynthesis;
synth.addEventListener('voiceschanged', voicesReady) ;
var voices = []

function voicesReady() {
  voices = synth.getVoices();

  const voiceSelect = document.getElementById('voice-select');

  voices.forEach((voice)=> {
    let newOption = document.createElement('option');
    newOption.textContent = voice.name + ' (' + voice.lang + ')';

    if (voice.default) {
      newOption.textContent += ' -- DEFAULT';
    }

    newOption.setAttribute('voice-name', voice.name);
    newOption.setAttribute('voice-lang', voice.lang);
    newOption.setAttribute('value', voice.name);

    voiceSelect.appendChild(newOption);
  });
}

function saySomething(event) {
  const textArea = document.getElementById('text-to-speak');
  let speech = new SpeechSynthesisUtterance(textArea.value);

  const voiceSelect = document.getElementById('voice-select');

  let chosenVoice = voices.find((voice)=>voice.name === voiceSelect.value);
  speech.voice = chosenVoice;
  synth.speak(speech);

  let image = document.querySelector('#explore > img');
  image.src = "assets/images/smiling-open.png";
  speech.addEventListener('end',()=>{image.src='assets/images/smiling.png';});

}

function init() {
  const button = document.querySelector('button');
  button.addEventListener('click',saySomething);
}