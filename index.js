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
    const x = Math.random() * wx;
    const y = Math.random() * wy;
    const r = Math.random() * 30;
    const sAngle = 0;
    const eAngle = Math.PI * 2;

    ctx.shadowOffsetY = -1;
    ctx.shadowColor = 'rgb(180, 180, 180)';

    const radgrad = ctx.createRadialGradient(x, y, r, x, y - 8, r / 2);
    radgrad.addColorStop(0, 'rgba(180, 180, 180, 0.35)')
    radgrad.addColorStop(0.1, 'rgba(170, 170, 170, 0.2)')
    radgrad.addColorStop(0.4, 'rgba(160, 160, 160, 0.15)')
    radgrad.addColorStop(0.6, 'rgba(150, 150, 150, 0.1)')
    radgrad.addColorStop(0.8, 'rgba(150, 150, 150, 0.05)')
    radgrad.addColorStop(1, 'rgba(150, 150, 150, 0.02)')

    ctx.beginPath();
    ctx.fillStyle = radgrad;
    ctx.arc(x, y, r, sAngle, eAngle, false);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'rgba(150, 150, 150, 0.3)';
    ctx.arc(x, y + r - 2, r/10, sAngle, eAngle, false)
    ctx.fill();
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