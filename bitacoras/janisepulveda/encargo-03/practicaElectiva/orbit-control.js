/*
 * @name Orbit Control
 * @arialabel Users can click on the screen and drag to move themselves around a 3D space. It consists of a white background with columns of purple cubes and green pyramids arched in curves. 
 * @description Orbit control allows you to drag and move around the world.
 */
new p5((p) => {
    let cam;
  
    p.setup = () => {
      p.createCanvas(700, 700, p.WEBGL);
      cam = p.createCamera();
      cam.setPosition(0, 0, 0);
    };
  
    p.draw = () => {
      p.background(20);
      let radius = p.width * 1.5;
  
      // Drag to move the world.
      p.orbitControl();
  
      p.normalMaterial();
      for (let i = 0; i <= 12; i++) {
        for (let j = 0; j <= 12; j++) {
          p.push();
          let a = (j / 12) * p.PI;
          let b = (i / 12) * p.PI;
          p.translate(
            p.sin(2 * a) * radius * p.sin(b),
            (p.cos(b) * radius) / 2,
            p.cos(2 * a) * radius * p.sin(b)
          );
          if (j % 2 === 0) {
            p.cone(30, 30);
          } else {
            p.box(30, 30, 30);
          }
          p.pop();
        }
      }
    };
  }, 'sketch');
  