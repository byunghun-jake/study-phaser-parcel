import Phaser from "phaser"

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("game-scene")
  }
  preload() {
    // 이미지 불러오기
    // public 폴더에 있는 것은 실행되었을 때,
    // 루트에 있는 것으로 여겨진다.
    // public 폴더를 새로 생성했을 때에는 서버를 껐다가 켜줘야 하는 것 같다.
    this.load.image("sky", "assets/sky.png")
    this.load.image("ground", "assets/platform.png")
    this.load.image("star", "assets/star.png")
    this.load.image("bomb", "assets/bomb.png")

    // 모션을 갖고 있는 이미지 불러오기
    this.load.spritesheet("dude", "assets/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    })
  }
  create() {
    // 불러왔던 이미지를 삽입한다.
    this.add.image(400, 300, "sky")
    this.add.image(400, 300, "star")
  }
}
