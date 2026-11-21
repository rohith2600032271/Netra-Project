function updateCurrenttime() {
    const now =new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("current time").textContent = timeString;
}
setInterval(updateCurrenttime, 1000);
updateCurrenttime();