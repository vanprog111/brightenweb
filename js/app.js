var _optionsBackground;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var mainTitle = document.getElementsByClassName('main-title')[0];
console.log(mainTitle);
var width = mainTitle.clientWidth || document.body.clientWidth;
var height = mainTitle.clientHeight || document.body.clientHeight;
var optionsBackground, bsBackground;
optionsBackground =
  ((_optionsBackground = {
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
  }),
  _defineProperty(_optionsBackground, 'frames', 100),
  _defineProperty(_optionsBackground, 'frameAnimation', true),
  _defineProperty(_optionsBackground, 'width', width),
  _defineProperty(_optionsBackground, 'height', height),
  _optionsBackground);
bsBackground = new Brushstroke(optionsBackground); //const mainTitle = document.getElementsByClassName('main-title')[0];

var canvas = bsBackground.defaults.ctx.canvas;
var ctx = bsBackground.defaults.ctx;
console.log(ctx);
mainTitle.append(canvas);
bsBackground.draw();
