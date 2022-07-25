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

// randomizing order of images to change appearance of each div
// in each iteration
images.sort((a, b) => {
  return 0.5 - Math.random();
});

// creating asteroids
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

// calling drop method to make asteroids fall
async function makeItRain() {
  await asteroid1.drop(1000);
  await asteroid2.drop(2000);
  await asteroid3.drop(3000);
  await asteroid4.drop(1250);
  await asteroid5.drop(1250);
  await asteroid6.drop(1250);
  await asteroid7.drop(1500);
  await asteroid8.drop(1500);
  await asteroid9.drop(1500);
  await asteroid10.drop(1750);
}
makeItRain();
