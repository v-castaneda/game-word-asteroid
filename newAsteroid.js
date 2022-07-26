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
    object.style.top = "-80px";
    object.style.padding = 0;
    object.style.borderWidth = 0;
    object.style.backgroundRepeat = "no-repeat";
    object.style.left = `0px`;

    // detect collision
    const asteroidRect = object.getBoundingClientRect();
    // const ss = document.getElementById("ss");
    // const ssRect = ss.getBoundingClientRect();

    // initiating Y position of asteroids
    let yPosTop = 0;
    let yPosBottom = 100;
    setInterval(() => {
      // updating Y position of asteroids
      yPosTop += 10;
      yPosBottom += 10;

      // obtaining current position of spaceship
      let ssRect = document.getElementById("ss").getBoundingClientRect();
      console.log(
        `Asteroid Left: ${asteroidRect.left} Asteroid Right: ${asteroidRect.right}`
      );
      console.log(`SS Left: ${ssRect.left} SS Right: ${ssRect.right}`);
      // console.log(asteroidRect.right);

      object.style.top = `${yPosTop}px`;
      let collisionFlag = !(
        yPosBottom < ssRect.top ||
        yPosTop > ssRect.bottom ||
        asteroidRect.right < ssRect.left ||
        asteroidRect.left > ssRect.right
      );

      if (yPosTop > 750) {
        yPosTop = 0;
        yPosBottom = 100;
      }

      if (collisionFlag) {
        // alert("Game Over");
        object.style.top = "0px";
        window.location.reload();
      }
    }, 100);
  }

  sleep(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }
}
