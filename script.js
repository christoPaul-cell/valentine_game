let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let message = document.getElementById("message");
let gif = document.getElementById("gif");
let sound = document.getElementById("loveSound");
let minionVideo = document.querySelector(".minion-video");

let yesSize = 18;
let noTexts = [
    "No 💔",
    "Are you sure? 😢",
    "Really sure? 🥺",
    "Think again 😭",
    "Don't break my heart 💔",
    "Last chance 😳",
    "Be nice 🥹",
    "Say yes instead 😘"
];

let textIndex = 0;

// Bouton NO initialement à côté de YES
noBtn.style.position = "relative"; // reste dans le flux flex
noBtn.style.fontSize = "18px";
noBtn.style.padding = "12px 25px";

// Déplacement du bouton NO et réduction progressive
function moveNoButton() {
    const btnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - btnRect.width;
    const maxY = window.innerHeight - btnRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed"; // devient fixe pour fuir
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    // Changer le texte
    noBtn.innerText = noTexts[textIndex % noTexts.length];
    textIndex++;

    // Réduction progressive
    let currentSize = parseInt(window.getComputedStyle(noBtn).fontSize);
    currentSize = Math.max(currentSize - 2, 8); // ne descend pas en dessous de 8px
    noBtn.style.fontSize = currentSize + "px";
    noBtn.style.padding = "5px " + currentSize + "px";

    // Le bouton YES grossit
    yesSize += 8;
    yesBtn.style.fontSize = yesSize + "px";
    yesBtn.style.padding = "15px " + (yesSize + 10) + "px";
}

// Événements sur NO
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", (e) => { e.preventDefault(); moveNoButton(); });

// Création de cœurs tombants
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    const size = Math.random() * 20 + 10;
    heart.style.fontSize = size + "px";
    heart.style.position = "fixed";
    heart.style.top = "-30px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "1000";
    heart.style.opacity = Math.random() * 0.8 + 0.2;

    document.body.appendChild(heart);

    let topPos = -30;
    const fallSpeed = Math.random() * 2 + 2;
    const drift = (Math.random() - 0.5) * 2;

    function fall() {
        topPos += fallSpeed;
        const leftPos = parseFloat(heart.style.left) + drift;
        heart.style.top = topPos + "px";
        heart.style.left = leftPos + "px";

        if (topPos > window.innerHeight) heart.remove();
        else requestAnimationFrame(fall);
    }
    fall();
}

// Quand l'utilisateur clique sur YES
yesBtn.addEventListener("click", () => {
    message.innerHTML = "Yaaay 💖🥰 I knew you would say YES!";
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
    minionVideo.style.display = "none"; // la vidéo disparaît
    question.style.display = "none"; // <-- cache la question
    gif.style.display = "block";
    sound.play();

    // Création de cœurs pendant 2 secondes
    const heartInterval = setInterval(createHeart, 100);
    setTimeout(() => clearInterval(heartInterval), 2000);
});
