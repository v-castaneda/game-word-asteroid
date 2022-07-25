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
  // size lane chosen to be consistent with character
  // div size; and a clean divisor of game div box
  const sizeLane = 100;

  // randomly choosing one of the 10 lanes to drop div from
  // the 10 comes from game div = 1000px, and sizeLane = 100px,
  // resulting in 10 lanes to choose from
  const randLane1 = (Math.random() * 10) % 2;

  // selecting a random integer to change the asteroid image
  // with each iteration
  // const randImg = Math.floor(Math.random() * images.length);
  // const asteroid1 = new Asteroid(images[randImg]);

  const asteroid1 = new Asteroid(images[0]);
  const asteroid2 = new Asteroid(images[1]);
  const asteroid3 = new Asteroid(images[2]);
  const asteroid4 = new Asteroid(images[3]);
  const asteroid5 = new Asteroid(images[4]);
  const asteroid6 = new Asteroid(images[5]);
  const asteroid7 = new Asteroid(images[6]);
  const asteroid8 = new Asteroid(images[7]);
  const asteroid9 = new Asteroid(images[7]);
  const asteroid10 = new Asteroid(images[7]);

  // passing the random lane chosen for the setFallLane method
  // asteroid1.setFallLane(sizeLane * randLane1);
  asteroid1.setFallLane(sizeLane * 0);
  asteroid2.setFallLane(sizeLane * 0);
  asteroid3.setFallLane(sizeLane * 0);
  asteroid4.setFallLane(sizeLane * 0);
  asteroid5.setFallLane(sizeLane * 0);
  asteroid6.setFallLane(sizeLane * 0);
  asteroid7.setFallLane(sizeLane * 0);
  asteroid8.setFallLane(sizeLane * 0);
  asteroid9.setFallLane(sizeLane * 0);
  asteroid10.setFallLane(sizeLane * 0);

  // set run flag to false when collision
  // asteroid.collisionDetection();

  runFlag = false;
}
