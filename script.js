// Loading Screen
window.addEventListener("load", () => {
    setTimeout(() => {
        const loading = document.getElementById("loading-screen");
        if (loading) {
            loading.style.display = "none";
        }
    }, 2500);
});

// Interactive Heart
const heart = document.getElementById("heart-button");

if (heart) {
    heart.addEventListener("click", () => {
        heart.style.transform = "scale(1.5)";
        setTimeout(() => {
            heart.style.transform = "scale(1)";
        }, 300);
    });
}

// Secret Message
const unlockBtn = document.getElementById("unlockBtn");
const secretMessage = document.getElementById("secretMessage");

if (unlockBtn && secretMessage) {
    unlockBtn.addEventListener("click", () => {
        secretMessage.classList.remove("hidden");
        unlockBtn.style.display = "none";
    });
}

// Gift Box
const giftBox = document.getElementById("gift-box");
const giftMessage = document.getElementById("gift-message");

if (giftBox && giftMessage) {
    giftBox.addEventListener("click", () => {
        giftMessage.classList.remove("hidden");
        giftBox.style.transform = "scale(1.2) rotate(10deg)";
    });
}

// Floating Hearts
const hearts = document.getElementById("floating-hearts");

if (hearts) {
    setInterval(() => {
        const heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.style.position = "absolute";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.top = "100%";
        heart.style.fontSize = (15 + Math.random() * 20) + "px";
        heart.style.opacity = "0.4";
        heart.style.transition = "transform 8s linear, opacity 8s";

        hearts.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = "translateY(-120vh)";
            heart.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 8000);

    }, 700);
}
