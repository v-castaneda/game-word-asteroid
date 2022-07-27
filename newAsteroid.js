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
    const divSize = 100;
    object.style.display = "inline-block";
    object.style.whiteSpace = "nowrap";
    object.style.overflow = "hidden";
    object.style.width = `${divSize}px`;
    object.style.height = `${divSize}px`;
    object.style.backgroundSize = `${divSize}px`;
    object.style.position = `relative`;
    object.style.top = "0px";
    object.style.padding = 0;
    object.style.borderWidth = 0;
    object.style.backgroundRepeat = "no-repeat";
    object.style.left = `0px`;

    // to detect collision
    const asteroidRect = object.getBoundingClientRect();

    // first, initialize top and bottom values of asteroid
    let asteroidTop = 0;
    let asteroidBottom = 0;
    let asteroidLeft = asteroidRect.left;
    let asteroidRight = asteroidRect.right;
    let myInterval = setInterval(() => {
      // the update asteroid's vertical position
      asteroidTop += 1;
      asteroidBottom += 1;

      // obtaining current position of spaceship
      let ssRect = document.getElementById("ss").getBoundingClientRect();

      object.style.top = `${asteroidTop}px`;

      let collisionFlag =
        asteroidRight >= ssRect.left &&
        asteroidLeft <= ssRect.right &&
        asteroidBottom >= ssRect.top &&
        asteroidTop <= ssRect.bottom;

      console.log(collisionFlag);

      if (asteroidTop > 750) {
        asteroidTop = 0;
        asteroidBottom = 100;
      }

      // creating object array for debugging
      const arrayDebug = [
        [
          "comparison",
          "asteroidRight >= ssRect.left",
          "asteroidLeft <= ssRect.right",
          "asteroidBottom >= ssRect.top",
          "asteroidTop <= ssRect.bottom",
        ],
        ["asteroid", asteroidRight, asteroidLeft, asteroidBottom, asteroidTop],
        ["spaceship", ssRect.left, ssRect.right, ssRect.top, ssRect.bottom],
        [
          "comparison",
          asteroidRight >= ssRect.left,
          asteroidLeft <= ssRect.right,
          asteroidBottom >= ssRect.top,
          asteroidTop <= ssRect.bottom,
        ],
      ];
      console.table(arrayDebug);

      if (collisionFlag) {
        const arrayDebug2 = [
          ["asteroidTop", "asteroidBottom", "ssRect.top", "ssRect.bottom"],
          [asteroidTop, asteroidBottom, ssRect.top, ssRect.bottom],
        ];
        console.table(arrayDebug2);
        alert("Game Over");
        // object.style.top = "0px";
        // window.location.reload();
      }
    }, 1);
  }

  sleep(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }
}
