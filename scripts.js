const titleButton = document.getElementById("title-button");
const mLetters = document.getElementsByClassName("m-letters");
const loungeAudio = document.getElementById("lounge");

function revealLetters() {
    for (const mLetter of mLetters) {
        mLetter.classList.add("m-letters-reveal");
    }
    loungeAudio.play();
    loungeAudio.loop = true;
    setTimeout(() => {
        titleButton.classList.add("button-rotate");
    }, 7000);
}

function revealGuy(guy) {
    guy.classList.add("guy-reveal");
    setTimeout(() => {
        guy.classList.add("guy-rotate");
    }, 5000);
}

function revealGuys() {
    const bickle = document.getElementById("bickle");
    const fickle = document.getElementById("fickle");
    const mickle = document.getElementById("mickle");
    const slickle = document.getElementById("slickle");
    const tickle = document.getElementById("tickle");

    const guys = [bickle, fickle, mickle, slickle, tickle];

    guys.forEach((guy, i) => {
        setTimeout(() => {
            revealGuy(guy);
        }, i * 5000);
    });
}

function reveal() {
    revealLetters();
    setTimeout(() => {
        revealGuys();
    }, 2000);
}

titleButton.onclick = reveal;
