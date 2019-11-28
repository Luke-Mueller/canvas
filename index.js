const body = document.querySelector('body');
body.addEventListener(onload, draw());

function draw() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const wx = window.innerWidth;
  const wy = window.innerHeight;
  canvas.width = wx;
  canvas.height = wy; 


  //  stars pattern ---------------------------------

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


  //  bubbles pattern ---------------------------------

  // for(let i = 0; i < 50; i++) {
  //   const x = Math.random() * wx;
  //   const y = Math.random() * wy;
  //   const r = Math.random() * 10 + 3;
  //   const sAngle = 0;
  //   const eAngle = Math.PI * 2;

  //   ctx.shadowOffsetY = -1;
  //   ctx.shadowColor = 'rgb(180, 180, 180)';

  //   const radgrad = ctx.createRadialGradient(x, y, r, x, y - 8, r / 2);
  //   radgrad.addColorStop(0, 'rgba(200, 200, 200, 0.5)')
  //   radgrad.addColorStop(0.2, 'rgba(180, 180, 180, 0.3)')
  //   radgrad.addColorStop(0.4, 'rgba(160, 160, 160, 0.2)')
  //   radgrad.addColorStop(0.6, 'rgba(150, 150, 150, 0.1)')
  //   radgrad.addColorStop(0.8, 'rgba(150, 150, 150, 0.05)')
  //   radgrad.addColorStop(1, 'rgba(150, 150, 150, 0.02)')

  //   ctx.beginPath();
  //   ctx.fillStyle = radgrad;
  //   ctx.strokeStyle = 'rgba(200, 200, 200, 0.2)'
  //   ctx.lineWidth = 0.2;
  //   ctx.arc(x, y, r, sAngle, eAngle, false);
  //   ctx.fill();
  //   ctx.stroke();

  //   ctx.beginPath();
  //   ctx.fillStyle = 'rgba(150, 150, 150, 0.3)';
  //   ctx.arc(x, y + r - 2, r/10, sAngle, eAngle, false)
  //   ctx.fill();
  // }

    /*

    to animate bubbles...   if(y === 0) y = wy

    */

    
  //  palette pattern ---------------------------------

  const xlength = wx / 50;
  const ylength = wy / 50;
  const rgbX = 255 / xlength;
  const rgbY = 255 / ylength;

  for(let i = 0; i < ylength; i++) {
    for(let j = 0; j < xlength; j++) {
      ctx.fillStyle = 'rgb(' + (
        Math.floor(255 - rgbY * i) + ', 0, ' +
        Math.floor(255 - rgbX * j) + ')'
      )
      ctx.strokeStyle = '#777777';
      // ctx.beginPath();
      ctx.fillRect(j * 50, i * 50, 50, 50);
      ctx.strokeRect(j * 50, i * 50, 50, 50);
    }
  }
}