class Asteroid {
  constructor(filePath) {
    // create div element for asteroid and assing ID
    const div = document.createElement("div");

    // extract numerical part of image file to generate unique ID
    const num = filePath.replace(/[^0-9]/g, "");
    const id = `asteroid-${num}`;
    div.setAttribute("id", id);
    this.id = id;

    // set background image of div to asteroid
    div.style.backgroundImage = `url(${filePath})`;

    // append div to DOM
    document.getElementById("game").appendChild(div);
  }

  // method to make asteroids fall
  async drop(time) {
    // create asteroid
    await this.sleep(time);
    const object = document.getElementById(this.id);

    // extract numerical part of ID to set div drop lane
    const objectNum = this.id.replace(/^\D+/g, "");
    const objLeft = objectNum * 100;
    object.style.left = `${objLeft}px`;

    // style to show single images
    object.style.display = "inline-block";
    object.style.whiteSpace = "nowrap";
    object.style.overflow = "hidden";
    object.style.backgroundRepeat = "no-repeat";

    // additional styling
    const divSize = 100;
    object.style.width = `${divSize}px`;
    object.style.height = `${divSize}px`;
    object.style.backgroundSize = `${divSize}px`;
    object.style.position = `absolute`;
    object.style.top = "0px";
    object.style.padding = 0;
    object.style.borderWidth = 0;

    // start of collision detection
    const asteroidRect = object.getBoundingClientRect();

    // first, initialize top and bottom values of
    // asteroid before kicking off setInterval as Top and Bottom
    // values will have to be updated in there
    let asteroidTop = 0;
    let asteroidBottom = 100;
    let asteroidLeft = asteroidRect.left;
    let asteroidRight = asteroidRect.right;

    setInterval(() => {
      // obtaining current position of spaceship
      let ssRect = document.getElementById("ss").getBoundingClientRect();

      // updating asteroid's vertical position informationg
      asteroidTop += 1;
      asteroidBottom += 1;
      object.style.top = `${asteroidTop}px`;

      // storing collision detection flag
      // BUG: For some reason the top and bottom values obtained in ssRect
      // are not consistent with the image display, hence the subtraction
      // of 100 below
      let collisionFlag =
        asteroidRight > ssRect.left &&
        asteroidLeft < ssRect.right &&
        asteroidBottom > ssRect.top - 100 &&
        asteroidTop < ssRect.bottom - 100;

      if (collisionFlag) {
        // creating table arrays for debugging collisions
        const arrayDebug = [
          [this.id],
          ["asteroidTop", "asteroidBottom", "ssRect.top", "ssRect.bottom"],
          [asteroidTop, asteroidBottom, ssRect.top, ssRect.bottom],
        ];
        console.table(arrayDebug);
        const arrayDebug2 = [
          [this.id],
          ["asteroidLeft", "asteroidRight", "ssRect.left", "ssRect.right"],
          [asteroidLeft, asteroidRight, ssRect.left, ssRect.right],
        ];
        console.table(arrayDebug2);

        alert("Game Over");
        // object.style.top = "0px";
        // window.location.reload();
      }

      // resetting top and bottom positions to avoid infinitely dropping asteroids
      if (asteroidTop >= 1000) {
        asteroidTop = 0;
        asteroidBottom = 100;
      }
    }, 1);
  }

  // Countdown clock
  startTimer() {
    let clockDiv = document.getElementById("clock");
    let startTime = 60;

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

  sleep(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }
}
