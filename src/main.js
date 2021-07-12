import Phaser from "phaser"

// import HelloWorldScene from "./scenes/HelloWorldScene"
// 다른 씬으로 전환
import GameScene from "./scenes/GameScene"

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 2000 },
    },
  },
  scene: [GameScene],
}

export default new Phaser.Game(config)
