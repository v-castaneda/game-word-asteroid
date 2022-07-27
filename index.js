newSpaceship("./assets/ship5.png");

// create list images for falling asteroids
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
let secBeforeDrop = 1000;
async function dropAsteroids() {
  await asteroid1.drop(secBeforeDrop);
  await asteroid2.drop(secBeforeDrop);
  await asteroid3.drop(secBeforeDrop);
  await asteroid4.drop(secBeforeDrop);
  await asteroid5.drop(secBeforeDrop);
  await asteroid6.drop(secBeforeDrop);
  await asteroid7.drop(secBeforeDrop);
  await asteroid8.drop(secBeforeDrop);
  await asteroid9.drop(secBeforeDrop);
  await asteroid10.drop(secBeforeDrop);
}
dropAsteroids();

// Countdown clock
let clockDiv = document.getElementById("clock");
let startTime = 60;

const countDown = setInterval(() => {
  startTime--;
  displayTime(startTime);
  if ((startTime <= 0) | (startTime < 1)) {
    endTime();
    clearInterval(countDown);
  }
}, 1000);

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  clockDiv.innerHTML = `Time: ${min < 10 ? "0" : ""}${min}:${
    sec < 10 ? "0" : ""
  }${sec}`;
}

function endTime() {
  clockDiv.innerHTML = "Level up";
}
