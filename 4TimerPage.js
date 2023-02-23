var milliseconds = 0;
var seconds = 0;
var minutes = 5;
var timerInterval;

function startTimer() {
  
  if (milliseconds == 0 && seconds == 0 && minutes == 0) {
    // Timer is complete
    alert("Time's up!");
    clearInterval(timerInterval);
  } else {
    // Decrease the timer by one millisecond
    if (milliseconds == 0) {
      milliseconds = 355;
      if (seconds == 0) {
        seconds = 59;
        minutes--;
      } else {
        seconds--;
      }
    } else {
      milliseconds--;
    }
    
    var timeString = (minutes > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds) + ":" + (milliseconds > 99 ? milliseconds : milliseconds > 9 ? "0" + milliseconds : "00" + milliseconds);
    document.getElementById("timer").innerHTML = timeString;
  }
}

function startTimerInterval() {
  timerInterval = setInterval(startTimer, 1);
}

startTimerInterval();

document.getElementById("stopButton").addEventListener("click", function() {
  clearInterval(timerInterval);
  
  // Change the text of the button depending on whether the timer is currently running or stopped
  if (document.getElementById("stopButton").innerHTML == "Stop Timer") {
    document.getElementById("stopButton").innerHTML = "Resume Timer";
  } else {
    document.getElementById("stopButton").innerHTML = "Stop Timer";
    startTimerInterval();
  }
});

var clickSound = document.getElementById("click-sound");
var button = document.getElementById("stopButton");

button.addEventListener("click", function() {
clickSound.play();
});