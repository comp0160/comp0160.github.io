let stars = [];
let speed = 5;
const STAR_COUNT = 25000;


function fixed_locs () { return random([-10, 10]); }
function random_range () { return random(-1, 1); }
function random_forward () { return random(-10, -1); }
function random_backward () { return random(1, 10); }
function random_height () { return random(-height, height); }
function random_width () { return random(-width, width); }
function random_depth () { return random(20, width); }
function fixed_zero () { return 0; }
function fixed_width () { return width; }
function fixed_speed () { return -10; }

let x_init = random_width;
let y_init = random_height;
let z_init = random_depth;

let x_speed = fixed_zero;
let y_speed = fixed_zero;
let z_speed = fixed_speed;

class Star {

  constructor() {
    this.x = x_init();
    this.y = y_init();
    this.z = z_init();
    this.pz = this.z;

    this.speed = { x: x_speed(), y: y_speed(), z: z_speed() };
  }

  update() {
    this.z = this.z + speed * this.speed.z;
    this.x = this.x + speed * this.speed.x;
    this.y = this.y + speed * this.speed.y;
    if (this.z < 1 || this.z > width) {
      this.x = x_init();
      this.y = y_init();
      this.z = z_init();
      this.pz = this.z;
    }
  }

  show() {
    fill(255);
    noStroke();

    let sx = map(this.x / this.z, 0, 1, 0, width);
    let sy = map(this.y / this.z, 0, 1, 0, height);

    let r = map(this.z, 0, width, 4, 0);
    //ellipse(sx, sy, r, r);

    let px = map(this.x / this.pz, 0, 1, 0, width);
    let py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(255);
    strokeWeight(r);
    line(px, py, sx, sy);

  }
}

function initStars()
{
  for (var i = 0; i < STAR_COUNT; i++)
  {
    stars[i] = new Star();
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  initStars();
}

function draw() {
  speed = map(mouseX, 0, width, 0, 5);
  background(0);
  translate(width / 2, height / 2);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function doubleClicked()
{
  var fs = fullscreen();
  fullscreen(!fs);
  if (fs)
  {
    cursor(ARROW);
  }
  else
  {
    noCursor();
  }
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed()
{
  if ( key === ' ' )
  {
    initStars();
  }

  if (key === 'a')
  {
    x_init = random_width;
    y_init = random_height;
    z_init = random_depth;
    x_speed = fixed_zero;
    y_speed = fixed_zero;
    z_speed = fixed_speed;

    initStars();
  }

  if (key === 'b')
  {
    x_init = random_width;
    y_init = random_height;
    z_init = random_depth;
    x_speed = fixed_zero;
    y_speed = fixed_zero;
    z_speed = random_range;

    initStars();
  }

  if (key === 'w')
  {
    x_init = fixed_locs;
    y_init = random_height;
    z_init = random_depth;
    x_speed = fixed_zero;
    y_speed = fixed_zero;
    z_speed = fixed_speed;

    initStars();
  }

  if (key === 'h')
  {
    y_init = fixed_locs;
    x_init = random_height;
    z_init = random_depth;
    x_speed = fixed_zero;
    y_speed = fixed_zero;
    z_speed = fixed_speed;

    initStars();
  }

  if (key === 's')
  {
    x_init = fixed_locs;
    y_init = random_height;
    z_init = random_depth;
    x_speed = fixed_zero;
    y_speed = fixed_zero;
    z_speed = random_forward;

    initStars();
  }

  if (key === 'd')
  {
    x_init = fixed_locs;
    y_init = random_height;
    z_init = random_depth;
    x_speed = fixed_zero;
    y_speed = fixed_zero;
    z_speed = random_range;

    initStars();
  }

  if (key === 'f')
  {
    x_init = fixed_locs;
    y_init = random_height;
    z_init = random_depth;
    x_speed = random_range;
    y_speed = random_range;
    z_speed = random_forward;

    initStars();
  }

  if (key === 'r')
  {
    x_init = random_width;
    y_init = random_height;
    z_init = random_depth;
    x_speed = random_range;
    y_speed = random_backward;
    z_speed = random_forward;

    initStars();
  }

  if (key === 'g')
  {
    x_init = random_depth;
    y_init = random_height;
    z_init = random_depth;
    x_speed = random_forward;
    y_speed = fixed_zero;
    z_speed = random_range;

    initStars();
  }
  
  if (key === 'k')
  {
    x_init = random_width;
    y_init = random_height;
    z_init = fixed_width;
    x_speed = fixed_zero;
    y_speed = fixed_zero;
    z_speed = fixed_speed;

    initStars();
  }
}