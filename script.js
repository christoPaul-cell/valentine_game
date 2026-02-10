let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let message = document.getElementById("message");
let gif = document.getElementById("gif");
let sound = document.getElementById("loveSound");

let yesSize = 18;

// Le bouton NO fuit quand on essaie de le cliquer 😈
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    // Le bouton YES grossit à chaque tentative
    yesSize += 8;
    yesBtn.style.fontSize = yesSize + "px";
    yesBtn.style.padding = "20px " + yesSize + "px";
});

// Quand l'utilisateur clique sur YES 💖
yesBtn.addEventListener("click", () => {
    message.innerHTML = "Yaaay 💖🥰 I knew you would say YES!";

    noBtn.style.display = "none";
    yesBtn.style.display = "none";

    gif.style.display = "block";
    sound.play();
});
