function sound(e) {
  const Audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //console.log(Audio, key);
  if (!Audio) {
    return;
  }

  Audio.currentTime = 0;
  Audio.play();
  key.classList.toggle("playing");
}

function ending(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!key) {
    return;
  }
  key.classList.toggle("playing");
}

window.addEventListener("keydown", sound);
window.addEventListener("keyup", ending);
