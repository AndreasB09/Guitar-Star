// array with sound
const soundFolder = "sounds";
const sounds = [
  {
    // fileName: "Guitar_Chords1.wav",
    hotKey: "q",
    //color: "green",
  },
  {
    hotKey: "w",
    //color: red
  },
  {
    hotKey: "e",
  },
  {
    hotKey: "r",
  },
  {
    hotKey: "t",
  },
];

//create buttons and function

//add mouseclick and keypress listeners

//background stars
//animations glitch at start and sometimes scrollbar flashes
//once it reaches maxStars it seems fine
let starCount = 0;
let maxStars = 20;

function createFallingStar() {
  if (starCount < maxStars) {
    const fallingStar = document.createElement('div');
    fallingStar.classList.add('falling-star')
    document.getElementById('container').appendChild(fallingStar);

    const randomStar = Math.random() * (window.innerWidth - 20);
    fallingStar.style.left = `${randomStar}px`;

    const randomDelay = Math.random() * 2000;

    setTimeout(() => {
      fallingStar.style.animationDelay = `-${randomDelay}ms`;
      fallingStar.style.animationPlayState = 'running';
      starCount++;
    }, randomDelay);
  }
}

function startAnimation() {
    setInterval(createFallingStar, 2000);
}

window.onload = startAnimation;