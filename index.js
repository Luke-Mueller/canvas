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

  for(let i = 0; i < 1000; i++) {
    ctx.beginPath();
    const x = Math.random() * wx;
    const y = Math.random() * wy;
    const r = Math.random() * 25 + 3;
    const sAngle = 0;
    const eAngle = Math.PI * 2;

    ctx.shadowOffsetY = -1;
    ctx.shadowColor = 'rgb(150, 150, 150)';

    const radgrad = ctx.createRadialGradient(x, y, r, x, y-8, r);
    radgrad.addColorStop(0, 'rgba(200, 200, 200, 0.4)')
    radgrad.addColorStop(0.2, 'rgba(200, 200, 200, 0.3)')
    radgrad.addColorStop(0.4, 'rgba(200, 200, 200, 0.2)')
    // radgrad.addColorStop(0.6, 'rgba(200, 200, 200, 0.2)')
    // radgrad.addColorStop(0.8, 'rgba(200, 200, 200, 0.1)')
    radgrad.addColorStop(1, 'transparent')

    ctx.fillStyle = radgrad;
    ctx.strokeStyle = 'rgba(150,150,150,0.3)';
    ctx.lineWidth = 0.5;
    ctx.arc(x, y, r, sAngle, eAngle, false);
    ctx.fill();
    ctx.stroke();
  }

    /*

    to animate bubbles...   if(y === 0) y = wy

    */





  //  palette pattern ---------------------------------

  // for(let i = 0; i < 6; i++) {
  //   for(let j = 0; j < 6; j++) {
  //     ctx.fillStyle = 'rgb(' + (
  //       Math.floor(255 - 42.5 * i) + ', 0, ' +
  //       Math.floor(255 - 42.5 * j) + ')'
  //     )
  //     ctx.fillRect(j * 50, i * 50, 50, 50)
  //   }
  // }
}