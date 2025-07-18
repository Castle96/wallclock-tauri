import './style.css';

// ==== Digital Time ====
function formatTime12Hour(date: Date): string {
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  hours = hours % 12;
  if (hours === 0) hours = 12;
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds
    .toString().padStart(2, '0')}`; // <-- Add seconds here
}

function formatMinimalAmericanDate(date: Date): string {
  // e.g., Friday, July 18
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
}

function updateDigitalAndDate() {
  const now = new Date();
  (document.getElementById('time') as HTMLElement).textContent = formatTime12Hour(now);
  (document.getElementById('date') as HTMLElement).textContent = formatMinimalAmericanDate(now);
}

function tick() {
  updateDigitalAndDate();
  requestAnimationFrame(tick);
}
tick();
