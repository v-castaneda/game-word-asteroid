function displayTime(inputTime) {
  // calculate number of minutes
  const min = Math.floor(inputTime / 60);
  console.log(min);
  // calculate number of seconds
  const sec = Math.floor(inputTime % 60);
  // aapend value to document
  gameTimer.innerHTML = `${min < 10 ? "0" : ""}${min}:${
    sec < 10 ? "0" : ""
  }${sec}`;
}

function countdown() {
  setInterval(() => {
    startTime--;
    displayTime(startTime);
    if (startTime <= 0) {
      stopTimer();
      clearInterval(countdown);
    }
  }, 1000);
}
