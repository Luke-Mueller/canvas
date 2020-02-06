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
//       star.a = star.a + 0.01
//       star.fillstyle = 'rgba(198, 200, 175, ' + star.a + ')'
//     }


//   };

//   requestAnimationFrame(render);
// };

// render();

// while(stars.length < 2000) stars.push(new Star());