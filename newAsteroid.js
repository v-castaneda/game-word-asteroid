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

  // make asteroids fall
  async drop(time) {
    // create asteroid
    await this.sleep(time);
    const object = document.getElementById(this.id);

    const objectNum = this.id.replace(/^\D+/g, "");
    const objLeft = objectNum * 100;
    object.style.left = `${objLeft}px`;

    object.style.display = "inline-block";
    object.style.whiteSpace = "nowrap";
    object.style.overflow = "hidden";

    const divSize = 100;
    object.style.width = `${divSize}px`;
    object.style.height = `${divSize}px`;
    object.style.backgroundSize = `${divSize}px`;
    object.style.position = `absolute`;
    object.style.top = "0px";
    object.style.padding = 0;
    object.style.borderWidth = 0;
    object.style.backgroundRepeat = "no-repeat";

    // to detect collision
    const asteroidRect = object.getBoundingClientRect();

    // first, initialize top and bottom values of asteroid
    let asteroidTop = 0;
    let asteroidBottom = 100;
    let asteroidLeft = asteroidRect.left;
    let asteroidRight = asteroidRect.right;

    setInterval(() => {
      // the update asteroid's vertical position
      asteroidTop += 1;
      asteroidBottom += 1;

      // obtaining current position of spaceship
      let ssRect = document.getElementById("ss").getBoundingClientRect();

      object.style.top = `${asteroidTop}px`;

      let collisionFlag =
        asteroidRight > ssRect.left &&
        asteroidLeft < ssRect.right &&
        asteroidBottom > ssRect.top - 100 &&
        asteroidTop < ssRect.bottom - 100;

      if (collisionFlag) {
        const arrayDebug = [
          [this.id],
          ["asteroidTop", "asteroidBottom", "ssRect.top", "ssRect.bottom"],
          [asteroidTop, asteroidBottom, ssRect.top, ssRect.bottom],
        ];
        console.table(arrayDebug);
        const arrayDebug3 = [
          [this.id],
          ["asteroidLeft", "asteroidRight", "ssRect.left", "ssRect.right"],
          [asteroidLeft, asteroidRight, ssRect.left, ssRect.right],
        ];
        console.table(arrayDebug3);
        alert("Game Over");
        // object.style.top = "0px";
        // window.location.reload();
      }

      if (asteroidTop >= 1000) {
        asteroidTop = 0;
        asteroidBottom = 100;
      }
    }, 1);
  }

  sleep(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }
}
