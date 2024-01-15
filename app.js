// array with sound

//create buttons and function

//add mouseclick and keypress listeners

//background stars
function createFallingStar() {
    const fallingStar = document.createElement('div');
    fallingStar.classList.add('falling-star')
    document.getElementById('container').appendChild(fallingStar);

    const randomStar = Math.random() * (window.innerWidth - 20);
    fallingStar.style.left = `${randomStar}px`;

    const randomDelay = Math.random() * 2000;

    setTimeout(() => {
      fallingStar.style.animationDelay = `-${randomDelay}ms`;
      fallingStar.style.animationPlayState = "running";
    }, randomDelay);
}

function startAnimation() {
    setInterval(createFallingStar, 2000);
}

window.onload = startAnimation;