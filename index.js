//  Canvas dimensions
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let wx = window.innerWidth;
let wy = window.innerHeight;
canvas.width = wx;
canvas.height = wy; 


//   --------------------------------- Stars pattern ---------------------------------  


// class Star {
//   constructor() {
//     this.a = Math.random();
//     this.b = 0;
//     this.fillstyle = 'rgba(198, 200, 175, ' + this.a + ')';
//     this.x = Math.random() * wx;
//     this.y = Math.random() * wy;
//     this.r = Math.random() * 1;
//     this.sAngle = 0;
//     this.eAngle = Math.PI * 2;
//     this.update = () => {
//       ctx.beginPath();
//       ctx.fillStyle = this.fillstyle;
//       ctx.arc(this.x, this.y, this.r, this.sAngle, this.eAngle, false);
//       ctx.fill();
//     };
//   };
// };

// const stars = [];

// const render = () => {
//   if (wx !== window.innerWidth || wy !== window.innerHeight) {
//     wx = window.innerWidth;
//     wy = window.innerHeight;
//     canvas.width = wx;
//     canvas.height = wy;
//   }
//   ctx.clearRect(0, 0, wx, wy);
//   for (let i = 0; i < stars.length; i++) {
//     const star = stars[i];
//     star.update();

//     if (star.b === 0) {
//       if(star.a <= 0.5) {
//         star.b = star.a;
//         star.a -= 0.01;
//       } else {
//         star.b = star.a;
//         star.a += 0.01
//       }
//     } else {
//       if (star.a > star.b)
//     }
//     // else {
//     //   star.a = star.a + 0.01
//     //   star.fillstyle = 'rgba(198, 200, 175, ' + star.a + ')'
//     // }

    
//   };

//   requestAnimationFrame(render);
// };

// render();

// while(stars.length < 2000) stars.push(new Star());


//  --------------------------------- BUBBLES PATTERN ---------------------------------

class Bubble {
  constructor() {
    this.x = Math.random() * wx;
    this.y = wy;
    this.r = Math.random() * 15 + 10;
    this.vel = Math.random() + 3;
    this.sAngle = 0;
    this.eAngle = Math.PI * 2;
    this.update = () => {

      //  Outer bubble shadow
      ctx.shadowOffsetY = -1;
      ctx.shadowColor = 'rgb(180, 180, 180)';

      //  Outer bubble radial gradient fillStyle
      const radgrad = ctx.createRadialGradient(this.x, this.y, this.r, this.x, this.y - 8, this.r / 2);
      radgrad.addColorStop(0, 'rgba(200, 200, 200, 0.8)');
      radgrad.addColorStop(0.1, 'rgba(180, 0, 0, 0.4)');
      radgrad.addColorStop(0.15, 'rgba(180, 120, 0, 0.5)');
      radgrad.addColorStop(0.25, 'rgba(170, 170, 0, 0.3)');
      radgrad.addColorStop(0.4, 'rgba(0, 160, 0, 0.3)');
      radgrad.addColorStop(0.5, 'rgba(0, 0, 150, 0.2)');
      radgrad.addColorStop(0.6, 'rgba(150, 150, 150, 0.1)');

      //  Outer bubble
      ctx.beginPath();
      ctx.fillStyle = radgrad;
      ctx.strokeStyle = 'grey';
      ctx.lineWidth = 0.15;
      ctx.arc(this.x, this.y, this.r, this.sAngle, this.eAngle, false);
      ctx.fill();
      ctx.stroke();

      //  Inner bubble
      ctx.beginPath();
      ctx.fillStyle = 'rgba(150, 150, 150, 0.3)';
      ctx.arc(this.x, this.y + this.r - 2, this.r / 20, this.sAngle, this.eAngle, false);
      ctx.fill();
    }
  };
};

const bubbles = [];

function render() {

  //  clear the canvas
  if(wx !== window.innerWidth || wy !== window.innerHeight) {
    wx = window.innerWidth;
    wy = window.innerHeight;
    canvas.width = wx;
    canvas.height = wy;
  }

  ctx.clearRect(0, 0, wx, wy);

  //  draw color palette background
  const xlength = wx / 50;
  const ylength = wy / 50;
  const rgbX = 255 / xlength;
  const rgbY = 255 / ylength;

  for(let i = 0; i < ylength; i++) {
    for(let j = 0; j < xlength; j++) {
      ctx.fillStyle = 'rgb(' + (
        Math.floor(255 - rgbY * i) + ', ' +
        '0, ' +
        Math.floor(255 - rgbX * j) + ')'
      )
      ctx.strokeStyle = '#222222';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.fillRect(j * 50, i * 50, 50, 50);
      ctx.strokeRect(j * 50, i * 50, 50, 50);
    };
  };

  //  animate bubbles
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    if(bubbles[i].y > -bubbles[i].r) {
      bubbles[i].y = bubbles[i].y - bubbles[i].vel;
    } else {
      bubbles[i].y = wy + bubbles[i].r * 4;
      bubbles[i].x = Math.random() * wx;
    };
  };
  
  requestAnimationFrame(render);
};

render();

setInterval(()=> {
  if(bubbles.length < 400) {
    bubbles.push(new Bubble());
  };
}, 500);



//  --------------------------------- PALETTE PATTERN ---------------------------------

// const xlength = wx / 50;
// const ylength = wy / 50;
// const rgbX = 255 / xlength;
// const rgbY = 255 / ylength;

// for(let i = 0; i < ylength; i++) {
//   for(let j = 0; j < xlength; j++) {
//     ctx.fillStyle = 'rgb(' + (
//       Math.floor(255 - rgbY * i) + ', 0, ' +
//       Math.floor(255 - rgbX * j) + ')'
//     )
//     ctx.strokeStyle = '#777777';
//     ctx.beginPath();
//     ctx.fillRect(j * 50, i * 50, 50, 50);
//     ctx.strokeRect(j * 50, i * 50, 50, 50);
//   };
// };