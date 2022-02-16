import { pi, animationLineWidth, animationSpeed } from "./constants";

function scrollTo(e) {
  e.preventDefault();
  const id = e.target.hash;
  const element = document.querySelector(id);
  const rect = element.getBoundingClientRect();
  window.scrollTo({
    top: rect.top - 70 + window.scrollY,
    left: 0,
    behavior: "smooth",
  });
}

class animationField {
  #ctx;
  #width;
  #height;
  #numLines;

  constructor(ctx, width, height, numLines) {
    this.#ctx = ctx;
    this.#width = width;
    this.#height = height;
    this.#numLines = numLines;

    this.#ctx.strokeStyle = "black";
    this.#ctx.lineWidth = animationLineWidth;
    this.deltaAngle = 0;
    this.lastTime = 0;
  }

  #draw(x, y) {
    // const length = 600;
    this.#ctx.beginPath();
    this.#ctx.moveTo(this.#width / 2, this.#height / 2);
    this.#ctx.lineTo(x, y);
    this.#ctx.closePath();
    this.#ctx.stroke();
  }

  animate(timeStamp) {
    const deltaTime = timeStamp - this.lastTime;
    this.lastTime = timeStamp;
    this.#ctx.clearRect(0, 0, this.#width, this.#height);
    this.deltaAngle += animationSpeed;
    if (this.deltaAngle > 2) this.deltaAngle = 0;

    for (let i = 0; i < this.#numLines; i++) {
      //  convert angle / polar coords to x y coords
      let rads = (i * 2) / this.#numLines;
      rads += this.deltaAngle;
      if (rads > 2) rads -= 2;

      const x = 2000 * Math.cos((rads - 1) * pi);
      const y = 2000 * Math.sin((rads - 1) * pi);
      this.#draw(x + this.#width / 2, y + this.#height);
    }

    requestAnimationFrame(this.animate.bind(this));
  }
}

export { animationField };
export default scrollTo;
