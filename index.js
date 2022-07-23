newSpaceship("./assets/ship5.png");

// create list images for falling asteroids
const images = {
  img1: "./assets/asteroid-1.png",
  img2: "./assets/asteroid-2.png",
  img3: "./assets/asteroid-3.png",
  img4: "./assets/asteroid-4.png",
  img5: "./assets/asteroid-5.png",
  img6: "./assets/asteroid-6.png",
  img7: "./assets/asteroid-7.png",
};

// identify game with and divide into N lanes
const gameSize = document.getElementById("game").offsetWidth;
const numLanes = gameSize / 100;

const asteroid = new Asteroid(images.img1);
asteroid.setFallLane(300);
