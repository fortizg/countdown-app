// Calculate the time remaining until November 7th, 2023
const countdownDate = new Date("2023-10-12T00:00:00").getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = countdownDate - currentDate;

    if (timeRemaining <= 0) {
        // Display the "Happy Birthday" message once the target date is reached or passed
        document.getElementById("countdown").style.display = "none";
        document.getElementById("birthday-message").style.display = "block";
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days + "d";
        document.getElementById("hours").textContent = hours + "h";
        document.getElementById("minutes").textContent = minutes + "m";
        document.getElementById("seconds").textContent = seconds + "s";
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display the countdown
updateCountdown();
