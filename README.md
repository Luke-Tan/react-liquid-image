# react-liquid-image

An aesthetic component that turns an image into a particlized version with an interactive liquid effect on mouseOver. Inspired and adapted from the homepage of https://frontendexpert.io/.

Supports customization such as

1. Particle size
2. Particle gap
3. Particle shape (square, circle)
4. Noise (particle resting movement)
5. Push magnitude (on mouseOver)

# Usage

1. `npm install react-liquid-image`
2. `import { LiquidImage } from react-liquid-image`
3. use with `<LiquidImage />` in your React app

# Demo

https://react-liquid-image-demo.netlify.app

# Props

| Prop Name    | Description                                                                                                              | Type                    | Default    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ | ----------------------- | ---------- |
| img          | Image source                                                                                                             | `string`                | `null`     |
| width        | Width of resulting particlized image that is drawn                                                                       | `Number`                | `500`      |
| height       | Height of resulting particlized image that is drawn                                                                       | `Number`                | `300`      |
| canvasWidth  | Width of the canvas to draw the particlized image on                                                                     | `Number`                | `800`      |
| canvasHeight | Height of the canvas to draw the particlized image on                                                                     | `Number`                | `400`      |
| noise        | How much each particle jiggles when resting (set to 0 for stationary particles at rest)                                  | `Number`                | `0.8`      |
| gap          | Gap between each particle                                                                                                | `Number`                | `5`        |
| particleType | Shape of each particle                                                                                                   | `"square" \| "circle" ` | `"square"` |
| particleSize | Size of each particle                                                                                                    | `Number `               | `3`        |
| threshold    | RGB values of pixels to not consider when particlizing the image. 0 will include all pixels, 256 will exclude all pixels | `Number`                | `60`       |
| push         | Amount that each particle is pushed aside on mouseOver                                                                   | `Number`                | `1/60`     |

# FAQ

**Q. My image is very slow**

A: Reduce the number of particles being rendered on the canvas. This can be done through some combination of increasing `threshold`, `gap`, `particleSize`, or decreasing `width`, `height`
