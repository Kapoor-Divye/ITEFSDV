let isOn = false;  // bulb initially OFF

function toggleBulb() {
    isOn = !isOn;  // toggle state

    if (isOn) {
        document.getElementById("toggleBtn").innerText = "Turn OFF";
    } else {
        document.getElementById("bulb").style.backgroundColor = "aliceblue";
        document.getElementById("toggleBtn").innerText = "Turn ON";
    }
}

function fun(value) {
    if (isOn) {
        document.getElementById("bulb").style.backgroundColor = value;
    }
}