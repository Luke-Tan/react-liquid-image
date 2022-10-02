"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LiquidImage;

var _react = _interopRequireWildcard(require("react"));

var _liquid = _interopRequireDefault(require("./liquid.js"));

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

  const liquidRef = _react.default.useRef(null);

  (0, _react.useEffect)(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = src;

    img.onload = () => {
      liquidRef.current = new _liquid.default({
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
        var _liquidRef$current;

        liquidRef === null || liquidRef === void 0 ? void 0 : (_liquidRef$current = liquidRef.current) === null || _liquidRef$current === void 0 ? void 0 : _liquidRef$current.start();
      }, 1e3);
    };

    return () => {
      var _liquidRef$current2;

      liquidRef === null || liquidRef === void 0 ? void 0 : (_liquidRef$current2 = liquidRef.current) === null || _liquidRef$current2 === void 0 ? void 0 : _liquidRef$current2.stop();
    };
  }, []);
  (0, _react.useEffect)(() => {
    if (liquidRef !== null && liquidRef !== void 0 && liquidRef.current) {
      var _liquidRef$current3, _liquidRef$current4;

      liquidRef.current.stop();
      liquidRef === null || liquidRef === void 0 ? void 0 : (_liquidRef$current3 = liquidRef.current) === null || _liquidRef$current3 === void 0 ? void 0 : _liquidRef$current3.init({
        isUpdate: true,
        particleSize,
        push,
        width,
        height,
        threshold,
        particleType,
        gap,
        noise,
        canvasHeight,
        canvasWidth
      });
      liquidRef === null || liquidRef === void 0 ? void 0 : (_liquidRef$current4 = liquidRef.current) === null || _liquidRef$current4 === void 0 ? void 0 : _liquidRef$current4.start();
    }
  }, [particleSize, push, noise, particleType, gap]);
  return /*#__PURE__*/_react.default.createElement("canvas", {
    ref: canvasRef,
    width: canvasWidth,
    height: canvasHeight
  });
}