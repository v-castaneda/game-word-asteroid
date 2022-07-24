class Asteroid {
  constructor(filePath) {
    // create div element for asteroid and assing ID
    const div = document.createElement("div");
    div.setAttribute("id", "asteroid");

    // set background image of div to asteroid
    div.style.backgroundImage = `url(${filePath})`;

    document.getElementById("game").appendChild(div);
  }

  setFallLane(left) {
    // set css of falling asteroid
    const object = document.getElementById("asteroid");
    const divSize = 100;
    object.style.width = `${divSize}px`;
    object.style.height = `${divSize}px`;
    object.style.backgroundSize = `${divSize}px`;
    object.style.position = `relative`;
    object.style.top = `500px`;
    object.style.padding = 0;
    object.style.borderWidth = 0;
    object.style.backgroundRepeat = "no-repeat";
    object.style.left = `${left}px`;
    object.style.animation = "slide 4s infinite";
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
