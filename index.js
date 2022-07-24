newSpaceship("./assets/ship5.png");

// create list images for falling asteroids
const images = [
  "./assets/asteroid-1.png",
  "./assets/asteroid-2.png",
  "./assets/asteroid-3.png",
  "./assets/asteroid-4.png",
  "./assets/asteroid-5.png",
  "./assets/asteroid-6.png",
  "./assets/asteroid-7.png",
];

// initiate run flag
let runFlag = true;

while (runFlag) {
  // size lane chosen to be consistent with character
  // div size; and a clean divisor of game div box
  const sizeLane = 100;

  // randomly choosing one of the 10 lanes to drop div from
  // the 10 comes from game div = 1000, and sizeLane = 100,
  // resulting in 10 lanes to choose from
  const randLane = Math.floor(Math.random() * 10);

  // selecting a random integer to change the asteroid image
  // with each iteration
  const randImg = Math.floor(Math.random() * images.length);
  const asteroid = new Asteroid(images[randImg]);

  // passing the random lane chosen for the setFallLane method
  asteroid.setFallLane(sizeLane * randLane);

  // set run flag to false when collision
  asteroid.collisionDetection();

  runFlag = false;
}
