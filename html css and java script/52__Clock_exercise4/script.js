// ===== Select Clock Hands =====
const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');
const digitalTime = document.getElementById('digitalTime');

function updateClock() {
    // Get current time
    const now = new Date();

    const hours = now.getHours();         // 0 - 23
    const minutes = now.getMinutes();     // 0 - 59
    const seconds = now.getSeconds();     // 0 - 59

    // ===== Calculate rotation angles =====

    // Second hand: 60 seconds = 360 degrees
    const secondDeg = (seconds / 60) * 360;

    // Minute hand: 60 minutes = 360 degrees
    // + seconds ke hisse se smooth movement (optional)
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;

    // Hour hand: 12 hours = 360 degrees
    // + minutes ke hisse se slight movement
    const hourDeg = (hours % 12) / 12 * 360 + (minutes / 60) * 30;

    // ===== Apply rotation =====
    // Hands already centered via margin-left in CSS
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    // ===== Show digital time below clock =====
    let displayHours = hours % 12 || 12; // 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const pad = (n) => n.toString().padStart(2, '0');

    digitalTime.textContent =
        `${pad(displayHours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
}

// Run once immediately (taaki 1 second wait na karna pade)
updateClock();

// Update har second
setInterval(updateClock, 1000);

