// Timer for countdown
function startCountDown(time) {
  let clockDiv = document.getElementById("clock");

  // interval is set to every second
  const countDown = setInterval(() => {
    time--;
    displayTime(time);
    if ((time <= 0) | (time < 1)) {
      endTime();
      clearInterval(countDown);
    }
  }, 1000);

  // modifying min and secs to display two digits
  function displayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    clockDiv.innerHTML = `Countdown - ${min < 10 ? "0" : ""}${min}:${
      sec < 10 ? "0" : ""
    }${sec}`;
  }

  function endTime() {
    // console.log(`time @ end of timer: ${time}`);
    clockDiv.innerHTML = "!!!! Level up  !!!!";
  }
}
