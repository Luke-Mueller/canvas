//  Canvas dimensions
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let wx = window.innerWidth;
let wy = window.innerHeight;
canvas.width = wx;
canvas.height = wy; 


//  Stars pattern ---------------------------------

// for(let i = 0; i < 5000; i++) {
//   ctx.beginPath();
//   const x = Math.random() * wx;
//   const y = Math.random() * wy;
//   const r = Math.random() * 1.5;
//   const sAngle = 0;
//   const eAngle = Math.PI * 2;
//   ctx.fillStyle = 'rgba(198, 200, 175, ' + Math.random() + ')';
//   ctx.arc(x, y, r, sAngle, eAngle, false);
//   ctx.fill();
// }




//  Bubbles pattern ---------------------------------

class Bubble {
  constructor() {
    this.x = Math.random() * wx;
    this.y = wy;
    this.r = Math.random() * 15 + 3;
    this.dy = Math.random() * 2;
    this.dx = Math.round((Math.random() - 0.5) * 10);
    this.vel = Math.random() + 1;
    this.sAngle = 0;
    this.eAngle = Math.PI * 2;
    this.update = () => {
      //  Outer bubble shadow
      ctx.shadowOffsetY = -1;
      ctx.shadowColor = 'rgb(180, 180, 180)';

      //  Outer bubble radial gradient fillStyle
      const radgrad = ctx.createRadialGradient(this.x, this.y, this.r, this.x, this.y - 8, this.r / 2);
      radgrad.addColorStop(0, 'rgba(200, 200, 200, 0.5)');
      radgrad.addColorStop(0.2, 'rgba(180, 180, 180, 0.3)');
      radgrad.addColorStop(0.4, 'rgba(160, 160, 160, 0.2)');
      radgrad.addColorStop(0.6, 'rgba(150, 150, 150, 0.1)');
      radgrad.addColorStop(0.8, 'rgba(150, 150, 150, 0.05)');
      radgrad.addColorStop(1, 'rgba(150, 150, 150, 0.02)');
      //  Outer bubble
      ctx.beginPath();
      ctx.fillStyle = radgrad;
      ctx.strokeStyle = 'rgba(200, 200, 200, 0.2)';
      ctx.lineWidth = 0.2;
      ctx.arc(this.x, this.y, this.r, this.sAngle, this.eAngle, false);
      ctx.fill();
      ctx.stroke();
      //  Inner bubble
      ctx.beginPath();
      ctx.fillStyle = 'rgba(150, 150, 150, 0.3)';
      ctx.arc(this.x, this.y + this.r - 2, this.r / 10, this.sAngle, this.eAngle, false);
      ctx.fill();
    }
  };
};

//  Render bubbles 

const bubbles = [];

function render() {
  if(wx !== window.innerWidth || wy !== window.innerHeight) {
    wx = window.innerWidth;
    wy = window.innerHeight;
    canvas.width = wx;
    canvas.height = wy;
  }
  ctx.clearRect(0, 0, wx, wy);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    if(bubbles[i].y > -bubbles[i].r) {
      bubbles[i].y = bubbles[i].y - bubbles[i].vel;
    } else {
      bubbles[i].y = wy;
      bubbles[i].x = Math.random() * wx;
    };
  };
  requestAnimationFrame(render);
};

render();

setInterval(()=> {
  if(bubbles.length < 85) {
    bubbles.push(new Bubble());
  };
}, 250);

  //  palette pattern ---------------------------------

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
//     // ctx.beginPath();
//     ctx.fillRect(j * 50, i * 50, 50, 50);
//     ctx.strokeRect(j * 50, i * 50, 50, 50);
//   }
// }
