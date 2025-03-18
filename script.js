document.addEventListener("DOMContentLoaded", function () {
    // 🌟 Star Animation Setup
    const starContainer = document.createElement("div");
    starContainer.classList.add("stars");
    document.body.appendChild(starContainer);

    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");

        // Random position
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.top = Math.random() * window.innerHeight + "px";

        // Mixed size (tiny and big stars)
        let size = Math.random() < 0.8 ? Math.random() * 2 + 0.5 : Math.random() * 4 + 1.5; 
        star.style.width = size + "px";
        star.style.height = size + "px";

        // Random animation duration for twinkling
        star.style.animationDuration = Math.random() * 2 + 1 + "s";

        starContainer.appendChild(star);

        // Remove star after some time
        setTimeout(() => {
            star.remove();
        }, 6000);
    }

    // Generate stars faster (every **50ms** now)
    setInterval(createStar, 50);

    // ⏳ Countdown Timer
    function updateCountdown() {
        const now = new Date();
        const targetTime = new Date("2025-03-29T20:00:00"); // 29th March 8:00 PM

        const timeDiff = targetTime - now;

        if (timeDiff <= 0) {
            document.getElementById("countdown").innerHTML = "Time's up!";
            return;
        }

        // Calculate remaining time
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        // Update UI
        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }

    // Update countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown();
});
