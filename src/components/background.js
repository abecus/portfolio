import React from "react";
import p5 from "p5";

const hilbert_ = (P) => {
  const order = 7;
  let N;
  let total;

  let path = [];

  let counter = 0;

  const init = () => {
    N = P.int(P.pow(2, order));
    total = N * N;
    counter = 0;

    for (let i = 0; i < total; i++) {
      path[i] = hilbert(i);
      let len = P.width / N;
      path[i].mult(len);
      path[i].add(len / 2, len / 2);
    }
  };

  P.windowResized = () => {
    P.resizeCanvas(P.windowWidth, P.windowHeight);
    init();
  };

  P.setup = () => {
    P.createCanvas(P.windowWidth, P.windowHeight);
    P.colorMode(P.HSB, 360, 255, 255);
    P.background(0);
    init();
  };

  P.draw = () => {
    P.background(255);

    P.stroke(255);
    P.strokeWeight(1);
    P.noFill();
    //beginShape();

    for (let i = 1; i < counter; i++) {
      let h = P.map(i, 0, path.length, 0, 255);
      P.stroke(h, 255, 255);
      P.line(path[i].x, path[i].y, path[i - 1].x, path[i - 1].y);
    }
    //endShape();
    counter += 50;
    if (counter > path.length) {
      counter = 0;
      // P.noLoop();
    }
    // P.stroke(255);
    // if (P.mouseIsPressed) {
    //   P.line(P.pmouseX, P.pmouseY, P.mouseX, P.mouseX);
    // }
  };

  function hilbert(i) {
    const points = [
      new p5.Vector(0, 0),
      new p5.Vector(0, 1),
      new p5.Vector(1, 1),
      new p5.Vector(1, 0),
    ];

    let index = i & 3;
    let v = points[index];

    for (let j = 1; j < order; j++) {
      i = i >>> 2;
      index = i & 3;
      let len = P.pow(2, j);
      if (index === 0) {
        let temp = v.x;
        v.x = v.y;
        v.y = temp;
      } else if (index === 1) {
        v.y += len;
      } else if (index === 2) {
        v.x += len;
        v.y += len;
      } else if (index === 3) {
        let temp = len - 1 - v.x;
        v.x = len - 1 - v.y;
        v.y = temp;
        v.x += len;
      }
    }
    return v;
  }
};

// const s = (p) => {
//   let x = 100;
//   let y = 100;

//   p.setup = () => {
//     p.createCanvas(200, 200);
//   };

//   p.draw = () => {
//     p.push();
//     p.background(0);
//     p.fill(255);
//     p.rect(x, y, 50, 50);
//     p.pop();
//   };
// };

export default function Background() {
  const canvas = React.useRef();

  React.useEffect(() => {
    new p5(hilbert_, canvas.current);
  }, []);

  return <div className="sketch" ref={canvas} />;
}
