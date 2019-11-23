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


  // bubbles ---------------------------------

  for(let i = 0; i < 1000; i++) {
    ctx.beginPath();
    const x = Math.random() * wx;
    const y = Math.random() * wy;
    const r = Math.random() * 15 + 5;
    const sAngle = 0;
    const eAngle = Math.PI * 2;

    const radgrad = ctx.createRadialGradient(x, y, r, x, y-8, r);
    radgrad.addColorStop(0, 'white')
    radgrad.addColorStop(1, 'rgba(198, 200, 175, 0.5)')
    // radgrad.addColorStop(0.5, 'rgba(98, 100, 75, ' + Math.random() + ')')

    ctx.fillStyle = radgrad;
    ctx.arc(x, y, r, sAngle, eAngle, false);
    ctx.fill();
  }


  //  graph ---------------------------------
  // for(let i = 0; i < 7; i++) {
  //   for(let j = 0; j < 7; j++) {
  //     ctx.fillStyle = 'rgb(' + (
  //       Math.floor(255 - 31.8 * i) + ', 0, ' +
  //       Math.floor(255 - 31.8 * j) + ')'
  //     )
  //     ctx.fillRect(j * 50, i * 50, 50, 50)
  //   }
  // }
}