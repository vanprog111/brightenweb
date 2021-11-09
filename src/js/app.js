const mainTitle = document.getElementsByClassName('main-title')[0];
console.log(mainTitle);
var width = mainTitle.clientWidth || document.body.clientWidth;
var height = mainTitle.clientHeight || document.body.clientHeight;
var optionsBackground, bsBackground;

optionsBackground = {
  points: 10,
  inkAmount: 10,
  size: 300,
  frames: 10,
  frameAnimation: true,
  splashing: false,
  image: '../img/mainback.png',
  centered: true,
  queue: true,
  padding: 11,
  stretch: true,
  overlap: 100,
  frames: 100,
  frameAnimation: true,
  width: width,
  height: height,
};

bsBackground = new Brushstroke(optionsBackground);

//const mainTitle = document.getElementsByClassName('main-title')[0];

const canvas = bsBackground.defaults.ctx.canvas;
const ctx = bsBackground.defaults.ctx;
console.log(ctx);
mainTitle.append(canvas);

bsBackground.draw();
