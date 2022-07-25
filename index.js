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
  "./assets/asteroid-8.png",
  "./assets/asteroid-9.png",
  "./assets/asteroid-10.png",
];

// initiate run flag
let runFlag = true;

while (runFlag) {
  // randomizing order of images to change appearance of each div
  // in each iteration
  images.sort((a, b) => {
    return 0.5 - Math.random();
  });
  const asteroid1 = new Asteroid(images[0]);
  const asteroid2 = new Asteroid(images[1]);
  const asteroid3 = new Asteroid(images[2]);
  const asteroid4 = new Asteroid(images[3]);
  const asteroid5 = new Asteroid(images[4]);
  const asteroid6 = new Asteroid(images[5]);
  const asteroid7 = new Asteroid(images[6]);
  const asteroid8 = new Asteroid(images[7]);
  const asteroid9 = new Asteroid(images[8]);
  const asteroid10 = new Asteroid(images[9]);

  // passing the random lane chosen for the setFallLane method
  // asteroid1.setFallLane(sizeLane * randLane1);
  asteroid1.drop();
  asteroid2.drop();
  asteroid3.drop();
  asteroid4.drop();
  asteroid5.drop();
  asteroid6.drop();
  asteroid7.drop();
  asteroid8.drop();
  asteroid9.drop();
  asteroid10.drop();

  // set run flag to false when collision
  // asteroid.collisionDetection();
  runFlag = false;
}
