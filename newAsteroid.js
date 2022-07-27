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
    let dropRate = 1;

    setInterval(() => {
      // obtaining current position of spaceship
      let ssRect = document.getElementById("ss").getBoundingClientRect();

      // updating asteroid's vertical position informationg
      asteroidTop += dropRate;
      asteroidBottom += dropRate;
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

      if (collisionFlag && livesTotal - impactTally.length > 0) {
        // reset asteroid at the top once collision is detected
        object.style.top = "0px";
        asteroidTop = 0;
        asteroidBottom = 100;
        this.deductLives();
      } else if (collisionFlag && livesTotal - impactTally.length === 0) {
        alert("Game Over");
      } else if (asteroidTop >= 1000) {
        // also reset asteroid at the top once it clears the spaceship
        asteroidTop = 0;
        asteroidBottom = 100;
      }
    }, 10);
  }

  deductLives() {
    // deduct number of impacts from starting lives
    impactTally.push("i");
    dashLives.innerHTML = `Lives - ${livesTotal - impactTally.length}`;
  }

  sleep(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }
}
