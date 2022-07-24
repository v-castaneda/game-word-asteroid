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
  // keep run flag on when no collision
  const sizeLane = 100;
  const randLane = Math.floor(Math.random() * 10);

  const randImg = Math.floor(Math.random() * images.length);
  const asteroid = new Asteroid(images[randImg]);
  console.log(`sizeLane: ${sizeLane}`);
  console.log(`randLane: ${randLane}`);
  console.log(`sizeLane * randLane: ${sizeLane * randLane}`);
  asteroid.setFallLane(sizeLane * randLane);

  // set run flag to false when collision
  //   asteroid.collisionDetection();

  runFlag = false;
}
