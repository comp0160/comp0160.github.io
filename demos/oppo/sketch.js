let group_count = 2;
let thing_count = 20000;
let things = [];
let groups = [];
let paused = false;
let do_pause = true;
let speed = 5;
let colour = false;
let colours = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#e377c2',
  '#bcbd22', '#17becf'];
let compact = 0;

function initThings ()
{
  things = [];
  groups = [];

  for ( let ii = 0; ii < thing_count; ++ii )
  {
    things.push( { x: random(width),
                   y: random(height),
                   group: int(random(group_count)),
                   r: random(2, 8) });
  }

  for ( let ii = 0; ii < group_count; ++ii )
  {
    groups.push( { dx: 1,
                   dy: 0,
                   cx: random(width),
                   cy: random(height),
                   w: (height * 5 / (5 + compact)) * random(.9, 1.1),
                   h: (height * 5 / (5 + compact)) * random(.9, 1.1),
                  });
  }

  if ( compact )
  {
    for ( let ii = 0; ii < thing_count; ++ii )
    {
      let g = groups[things[ii].group];

      let px = map(things[ii].x, 0, width, g.cx - g.w/2, g.cx + g.w/2);
      if ( px < 0 ) { px += width; }
      else if ( px > width ) { px -= width; }

      let py = map(things[ii].y, 0, height, g.cy - g.h/2, g.cy + g.h/2);
      if ( py < 0 ) { py += height; }
      else if ( py > height ) { py -= height; }
      
      things[ii].x = px;
      things[ii].y = py;
    } 
  }
}

function updateThings ()
{
  for ( let ii = 0; ii < things.length; ++ii )
  {
    things[ii].x = things[ii].x + groups[things[ii].group].dx * speed;
    if ( things[ii].x > width ) { things[ii].x -= width; }
    else if ( things[ii].x < 0 ) { things[ii].x += width; }

    things[ii].y = things[ii].y + groups[things[ii].group].dy * speed;
    if ( things[ii].y > height ) { things[ii].y -= height; }
    else if ( things[ii].y < 0 ) { things[ii].y += height; }
  }
}

function drawThings ()
{
  for ( let ii = 0; ii < things.length; ++ii )
  {
    if ( colour ) { fill(colours[things[ii].group]); }
    ellipse( things[ii].x, things[ii].y, things[ii].r );
  }
}

function setup()
{
  createCanvas(windowWidth, windowHeight);
  initThings();
}

function draw()
{
  background(0);
  fill(255);

  drawThings();
  if ( do_pause ) { paused = true; do_pause = false; }
  if ( ! paused ) { updateThings(); }
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
  initThings();
}

function keyPressed()
{
  if ( key === ' ' )
  {
    paused = ! paused;
  }
  else if ( key === 'o' )
  {
    groups[1].dx = -1;
    groups[1].dy = 0;
  }
  else if ( key === 's' )
  {
    groups[1].dx = 1;
    groups[1].dy = 0;
  }
  else if ( key === 'd' )
  {
    groups[1].dx = 0;
    groups[1].dy = 1;
  }  
}