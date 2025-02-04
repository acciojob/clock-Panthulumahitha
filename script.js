function updateTime() {
    const timerElement = document.getElementById("timer");
    const now = new Date();
    const formattedTime = now.toLocaleString(); // Formats date & time based on locale
    timerElement.textContent = formattedTime;
}

// Run updateTime every second
setInterval(updateTime, 1000);

// Initialize timer immediately on page load
document.addEventListener("DOMContentLoaded", updateTime);
