//-----------------------------------------------------//
//------------------ game parameters ------------------//
//-----------------------------------------------------//

let startTime = 5; /* secs per level */
let startLevel = 0; /* starting level */
let endLevel = 10; /* ending level */

//-----------------------------------------------------//
//--------------------- timer -------------------------//
//-----------------------------------------------------//

// starting timer
startCountDown(startTime);
setInterval(() => {
  startCountDown(startTime);
}, startTime * 1000);

//-----------------------------------------------------//
//-------------------- spaceship ----------------------//
//-----------------------------------------------------//

newSpaceship("./assets/ship5.png");

//-----------------------------------------------------//
//----------------- asteroids -------------------------//
//-----------------------------------------------------//

// storing list of images to use as falling asteroids
const images = [
  "./assets/asteroid-0.png",
  "./assets/asteroid-1.png",
  "./assets/asteroid-2.png",
  "./assets/asteroid-3.png",
  "./assets/asteroid-4.png",
  "./assets/asteroid-5.png",
  "./assets/asteroid-6.png",
  "./assets/asteroid-7.png",
  "./assets/asteroid-8.png",
  "./assets/asteroid-9.png",
];

// randomize order of images to change
// appearance of dropped divs
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

// dropping asteroids
let timeB4drop = 1000;
async function dropAsteroids() {
  await asteroid1.drop(timeB4drop);
  // await asteroid2.drop(timeB4drop);
  // await asteroid3.drop(timeB4drop);
  // await asteroid4.drop(timeB4drop);
  // await asteroid5.drop(timeB4drop);
  // await asteroid6.drop(timeB4drop);
  // await asteroid7.drop(timeB4drop);
  // await asteroid8.drop(timeB4drop);
  // await asteroid9.drop(timeB4drop);
  // await asteroid10.drop(timeB4drop);
}
dropAsteroids();
