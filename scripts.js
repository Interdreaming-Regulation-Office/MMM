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
    guy.style.display = "block";
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

let order = [];

function checkOrder(order) {
    const correctOrder = ["bickle", "fickle", "slickle", "mickle", "tickle"];

    for (let item of order) {
        if (order.indexOf(item) !== correctOrder.indexOf(item))
            return false;
    }

    return true;
}

function attemptOpen(name) {
    order.push(name);

    if (checkOrder(order)) {
        if (order.length === 5) {
            // play friends and open site
            console.log("Correct order, site will open!")
            const friends = document.getElementById("friends");
            setTimeout(() => {
                friends.play();
            }, 3500);
        }
    }
    else {
        order = [];
    }
}

function revealGuys() {
    const guysNames = ["bickle", "fickle", "mickle", "slickle", "tickle"];

    const guys = guysNames.map(name => {
        const guy = document.getElementById(name);
        guy.onclick = () => {
            playAudio(name);
            attemptOpen(name);
        }
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
