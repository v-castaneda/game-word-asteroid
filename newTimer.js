// Timer for countdown
function startTimer() {
  let clockDiv = document.getElementById("clock");

  const countDown = setInterval(() => {
    startTime--;
    displayTime(startTime);
    if ((startTime <= 0) | (startTime < 1)) {
      endTime();
      clearInterval(countDown);
    }
  }, 1000);

  function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    clockDiv.innerHTML = `Time: ${min < 10 ? "0" : ""}${min}:${
      sec < 10 ? "0" : ""
    }${sec}`;
  }

  function endTime() {
    clockDiv.innerHTML = "Level up";
  }
}
