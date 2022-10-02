"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LiquidImage;

var _react = _interopRequireWildcard(require("react"));

var _liquid2 = _interopRequireDefault(require("./liquid.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function LiquidImage(_ref) {
  let {
    width = 500,
    height = 300,
    src = null,
    particleSize = 3,
    push = 1 / 60,
    threshold = 60,
    particleType = "square",
    gap = 5,
    noise = 0.8,
    canvasWidth = 800,
    canvasHeight = 400
  } = _ref;

  const canvasRef = _react.default.useRef(null);

  (0, _react.useEffect)(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = src;
    let liquid;

    img.onload = () => {
      liquid = new _liquid2.default({
        canvas: canvasRef.current,
        img: img,
        particleSize,
        push,
        width,
        height,
        threshold,
        particleType,
        gap,
        noise,
        canvasWidth,
        canvasHeight
      });
      setTimeout(() => {
        liquid.start();
      }, 1e3);
    };

    return () => {
      var _liquid;

      (_liquid = liquid) === null || _liquid === void 0 ? void 0 : _liquid.stop();
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement("canvas", {
    ref: canvasRef,
    width: canvasWidth,
    height: canvasHeight
  });
}