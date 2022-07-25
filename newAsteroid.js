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

  // time
  async drop(time) {
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
    object.style.top = `500px`;
    object.style.padding = 0;
    object.style.borderWidth = 0;
    object.style.backgroundRepeat = "no-repeat";
    object.style.left = `0px`;
    object.style.animation = "slide 4s infinite";
  }

  sleep(time) {
    return new Promise((resolve) => {
      setTimeout(resolve, time);
    });
  }

  collisionDetection() {
    const ss = document.getElementById("ss");
    const asteroid = document.getElementById("asteroid");

    let ssRect = ss.getBoundingClientRect();
    let asteroidRect = asteroid.getBoundingClientRect();
    // console.log(ssRect);
    // console.log(asteroidRect);

    setInterval(() => {
      let collisionFlag = !(
        ssRect.bottom < asteroidRect.top ||
        ssRect.top > asteroidRect.bottom ||
        ssRect.right < asteroidRect.left ||
        ssRect.left > asteroidRect.right
      );
      console.log(collisionFlag);
      if (collisionFlag) {
        alert("Game Over");
        ss.style.animation = "none";
      }
    }, 100);
  }
}
