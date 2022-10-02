import React, { useEffect } from "react";
import Liquid from "./liquid.js";
export default function LiquidImage({
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
  canvasHeight = 400,
}) {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = src;
    let liquid;
    img.onload = () => {
      liquid = new Liquid({
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
        canvasHeight,
      });
      setTimeout(() => {
        liquid.start();
      }, 1e3);
    };

    return () => {
      liquid?.stop();
    };
  }, []);

  return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
}
