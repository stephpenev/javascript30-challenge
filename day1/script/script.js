function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function from running if there is no sound file coded to that key
  audio.currentTime = 0; // rewinds the audio file to the start
  audio.play();

  // adding the playing class to the selected key
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; // skip it if it's not a transform property
  // console.log(this);
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);

// function playSound (KeyboardEvent) {
//   const audio = document.querySelector(`audio[data-key="${KeyboardEvent.keyCode}"]`)
//   const key = document.querySelector(`.key[data-key="${KeyboardEvent.keyCode}"]`)
//   if(!audio) return; //stop the function from running altogether
//   audio.currentTime = 0; // rewind to the start
//   audio.play();
//   key.classList.add('playing');
// }

// function removeTransition(e) {
//   if(e.propertyName !== 'transform') return; //skip it if it's not a transform
//   this.classList.remove('playing');
// }

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// window.addEventListener('keydown', playSound);
