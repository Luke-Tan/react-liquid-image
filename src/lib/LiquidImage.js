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
  const liquidRef = React.useRef(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = src;
    img.onload = () => {
      liquidRef.current = new Liquid({
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
        liquidRef?.current?.start();
      }, 1e3);
    };

    return () => {
      liquidRef?.current?.stop();
    };
  }, []);

  useEffect(() => {
    if (liquidRef?.current) {
      liquidRef.current.stop();
      liquidRef?.current?.init({
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
        canvasWidth,
      });
      liquidRef?.current?.start();
    }
  }, [particleSize, push, noise, particleType, gap]);

  return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
}
