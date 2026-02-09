// version 2

window.addEventListener("DOMContentLoaded", () => {

    // Elements
    const envelope = document.getElementById("envelope-container");
    const letter = document.getElementById("letter-container");
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".btn[alt='Yes']");

    const title = document.getElementById("letter-title");
    const catImg = document.getElementById("letter-cat");
    const buttons = document.getElementById("letter-buttons");
    const finalText = document.getElementById("final-text");

    const music = document.getElementById("bg-music");

    // Click Envelope
    envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    music.play().catch((err) => {
        console.log("Audio play failed:", err);
    });

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

    // Logic to move the NO btn
    noBtn.addEventListener("mouseover", () => {
    const moveDistance = 200;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * moveDistance;
    const moveY = Math.sin(angle) * moveDistance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

    // YES is clicked
    yesBtn.addEventListener("click", () => {
        title.textContent = "Yippeeee!";
        catImg.src = "cat_dance.gif";
        document.querySelector(".letter-window").classList.add("final");
        buttons.style.display = "none";
        finalText.style.display = "block";
    });

});
