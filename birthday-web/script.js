function enterBirthday() {
    document.getElementById("opening").style.display = "none";
    document.getElementById("birthday").classList.remove("hidden");
    document.getElementById("music").play();
}

let giftOpened = false;

function openGift() {
    if (giftOpened) return; // ⛔ cegah animasi ulang

    giftOpened = true;

    const gift = document.getElementById("gift");
    const message = document.getElementById("message");

    gift.style.display = "block";
    message.style.display = "block";

    // trigger animasi
    message.classList.add("show");
}

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 300);