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
