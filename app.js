// array with sound
const soundFolder = "sounds";
const sounds = [
  {
    fileName: "./sounds/distgit_chords_g.mp3",
    hotKey: "q",
    //color: "green",
  },
  {
    fileName: "distgit_chords_a.mp3",
    hotKey: "w",
    //color: red
  },
  {
    fileName: "distgit_chords_c.mp3",
    hotKey: "e",
  },
  {
    fileName: "distgit_chords_d.mp3",
    hotKey: "r",
  },
  {
    fileName: "distgit_chords_e.mp3",
    hotKey: "t",
  },
  {
    fileName: "distgit_chords_f.mp3",
    hotKey: "y",
  },
];

const btnContainer = document.createElement("div");
btnContainer.id = "btn-container";

//create buttons and function
sounds.forEach((sound) => {
  const chordButton = document.createElement("button");
  chordButton.classList.add("chord-btn");
  chordButton.classList.add(`chord-btn-${sound.hotKey}`);
  chordButton.textContent = sound.hotKey;
  chordButton.addEventListener('click', () => playSound(sound.fileName));
  btnContainer.appendChild(chordButton);
});

document.getElementById("container").appendChild(btnContainer);

//add keypress listeners
//need to add keypress down and up to stop

function playSound(fileName) {
  const audio = new Audio (`${soundFolder}/${fileName}`);
  audio.play();
};

document.addEventListener('keypress', (event) => {
  const keyPressed = event.key.toLowerCase();
  const sound = sounds.find(s => s.hotKey === keyPressed);
  if (sound) {
    playSound(sound.fileName);
  }
});

//background stars
//animations glitch at start and sometimes scrollbar flashes
//once it reaches maxStars it seems fine
//seemed to get solved with overflow:hidden. At least scrollbars disappeared
let starCount = 0;
let maxStars = 20;

function createFallingStar() {
  if (starCount < maxStars) {
    const fallingStar = document.createElement("div");
    fallingStar.classList.add("falling-star");
    document.getElementById("container").appendChild(fallingStar);

    const randomStar = Math.random() * (window.innerWidth - 20);
    fallingStar.style.left = `${randomStar}px`;

    const randomDelay = Math.random() * 2000;

    setTimeout(() => {
      fallingStar.style.animationDelay = `-${randomDelay}ms`;
      fallingStar.style.animationPlayState = "running";
      starCount++;
    }, randomDelay);
  }
}

function startAnimation() {
  setInterval(createFallingStar, 2000);
}

window.onload = startAnimation;
