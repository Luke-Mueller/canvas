const body = document.querySelector('body');
body.addEventListener(onload, draw());

function draw() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const wx = window.innerWidth;
  const wy = window.innerHeight;
  canvas.width = wx;
  canvas.height = wy; 


  //  stars ---------------------------------

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


  // // bubbles ---------------------------------

  for(let i = 0; i < 2000; i++) {
    ctx.beginPath();
    const x = Math.random() * wx;
    const y = Math.random() * wy;
    const r = Math.random() * 10 + 3;
    const sAngle = 0;
    const eAngle = Math.PI * 2;

    ctx.shadowOffsetY = -1;
    ctx.shadowColor = 'rgba(150, 150, 150, 0.5)';

    const radgrad = ctx.createRadialGradient(x, y, r, x, y-8, r);
    radgrad.addColorStop(0, 'rgb(200, 200, 200)')
    radgrad.addColorStop(0.9, 'rgba(203, 205, 180, 0.5)')
    radgrad.addColorStop(1, 'rgba(198, 200, 175, 0.5)')

    ctx.fillStyle = radgrad;
    ctx.arc(x, y, r, sAngle, eAngle, false);
    ctx.fill();
  }


  //  graph ---------------------------------
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