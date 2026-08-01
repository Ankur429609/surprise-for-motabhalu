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
const heartButton = document.getElementById("heart-button");

if (heartButton) {
    heartButton.addEventListener("click", () => {
        heartButton.style.transform = "scale(1.5)";
        setTimeout(() => {
            heartButton.style.transform = "scale(1)";
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

const heartParticles = document.getElementById("heart-particles");

if (heartButton && heartParticles) {

  heartButton.addEventListener("click", () => {

        for(let i=0;i<18;i++){

            const h=document.createElement("div");

            h.className="mini-heart";

            h.innerHTML="❤️";

            h.style.left="50%";

            h.style.setProperty("--x",(Math.random()*240-120)+"px");

            heartParticles.appendChild(h);

            setTimeout(()=>h.remove(),1000);

        }

    });

}

// Gift Confetti

if (giftBox && giftMessage) {
    giftBox.addEventListener("click", () => {

        const emojis=["🎉","✨","💖","🎊","❤️"];

        for(let i=0;i<30;i++){

            const c=document.createElement("div");

            c.className="confetti";

            c.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

            c.style.left=(Math.random()*120-60)+"px";

            c.style.top="20px";

            giftBox.appendChild(c);

            setTimeout(()=>c.remove(),1500);

        }

    });

}

// Fireflies

setInterval(() => {
    const firefly = document.createElement("div");
    firefly.className = "firefly";

    firefly.style.left = Math.random() * 100 + "%";
    firefly.style.top = "100vh";
    firefly.style.setProperty("--x", (Math.random() * 200 - 100) + "px");

    document.body.appendChild(firefly);

    setTimeout(() => {
        firefly.remove();
    }, 10000);

}, 1200);

// Shooting Stars

setInterval(() => {
    const star = document.createElement("div");
    star.className = "shooting-star";

    star.style.left = Math.random() * 100 + "%";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 1600);

}, 7000);
