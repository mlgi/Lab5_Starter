// expose.js

window.addEventListener('DOMContentLoaded', init);

function hornChange(event) {
  let image = document.querySelector("#expose > img");
  let audio = document.querySelector('audio');
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

function init() {
  const hornSelect = document.getElementById('horn-select');
  hornSelect.addEventListener('change', hornChange);
}