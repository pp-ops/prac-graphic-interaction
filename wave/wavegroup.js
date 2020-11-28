import { Wave } from "./wave.js"

export class WaveGroup {
  constructor() {
    this.tatalWaves = 15
    this.tatalPoints = 6

    this.color = [
      "rgba(0, 199, 235, 0.4)",
      "rgba(0, 146, 199, 0.4)",
      "rgba(0, 87, 158, 0.4)",
      "rgba(50, 168, 82, 0.4)",
      "rgba(25, 82, 107, 0.4)",
      "rgba(15, 33, 107, 0.4)",
      "rgba(138, 17, 194, 0.4)",
      "rgba(250, 17, 165, 0.4)",
      "rgba(212, 6, 51, 0.4)",
      "rgba(212, 164, 6, 0.4)",
      "rgba(159, 237, 14, 0.4)",
      "rgba(10, 122, 12, 0.4)",
      "rgba(114, 196, 196, 0.4)",
      "rgba(112, 50, 57, 0.4)",
      "rgba(3, 14, 140, 0.4)",
    ]

    this.waves = []

    for (let i = 0; i < this.tatalWaves; i++) {
      const wave = new Wave(i, this.tatalPoints, this.color[i])
      this.waves[i] = wave
    }
  }

  resize(stageWidth, stageHeight) {
    for (let i = 0; i < this.tatalWaves; i++) {
      const wave = this.waves[i]
      wave.resize(stageWidth, stageHeight)
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.tatalWaves; i++) {
      const wave = this.waves[i]
      wave.draw(ctx)
    }
  }
}
