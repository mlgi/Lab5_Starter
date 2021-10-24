// expose.js

window.addEventListener('DOMContentLoaded', init);

function hornChange(event) {
  const image = document.querySelector("#expose > img");
  const audio = document.querySelector('audio');
  let selectedOption = event.target.value;

  switch(selectedOption) {
    case 'party-horn':
      image.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";
    break;
    case 'car-horn':
      image.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    break;
    case 'air-horn':
      image.src = "assets/images/air-horn.svg";
      audio.src = "assets/audio/air-horn.mp3";
    break;
    default:
      image.src = "assets/images/no-images.png";
      audio.src = "";
  }
}

function volumeChange(event) {
  let audio = document.querySelector('audio');
  let targetVolume = Number(event.target.value);
  const volumeIcon = document.querySelector('#volume-controls > img');

  audio.volume = targetVolume / 100.0;

  if (targetVolume == 0) {
    volumeIcon.src = 'assets/icons/volume-level-0.svg';
  } else if (targetVolume >= 1 && targetVolume < 33) {
    volumeIcon.src = 'assets/icons/volume-level-1.svg';
  } else if(targetVolume >= 33 && targetVolume < 67) {
    volumeIcon.src = 'assets/icons/volume-level-2.svg';
  } else {
    volumeIcon.src = 'assets/icons/volume-level-3.svg';
  }
}

function playSound(event) {
  let audio = document.querySelector('audio');
  audio.play();
}

function init() {
  const hornSelect = document.getElementById('horn-select');
  hornSelect.addEventListener('change', hornChange);

  const volumeControl = document.getElementById('volume');
  volumeControl.addEventListener('input',volumeChange);

  const playButton = document.querySelector('button');
  playButton.addEventListener('click', playSound);
}