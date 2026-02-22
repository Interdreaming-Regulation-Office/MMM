const titleButton = document.getElementById("title-button");
const mLetters = document.getElementsByClassName("m-letters");
const loungeAudio = document.getElementById("lounge");

const guysAudio = {
    bickle: document.getElementById("hello"),
    fickle: document.getElementById("looks"),
    mickle: document.getElementById("help"),
    slickle: document.getElementById("smells"),
    tickle: document.getElementById("kidding"),
}

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

function playAudio(name) {
    Object.values(guysAudio).forEach(audio => audio.pause());

    guysAudio[name].currentTime = 0;
    guysAudio[name].play();
}

function revealGuys() {
    const guysNames = ["bickle", "fickle", "mickle", "slickle", "tickle"];

    const guys = guysNames.map(name => {
        const guy = document.getElementById(name);
        guy.onclick = () => playAudio(name);
        return guy;
    });

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
