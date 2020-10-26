
import Phaser from 'phaser';


class HealthBar {

  constructor(scene, x, y, health) {
    this.bar = new Phaser.GameObjects.Graphics(scene);
    this.bar.setScrollFactor(0, 0);

    this.x = x;
    this.y = y;
    this.value = health;

    this.size = {
      width: 40,
      height: 8
    }

    this.pixelPerHealth = this.size.width / this.value;

    scene.add.existing(this.bar);
    this.draw(x, y)
  }

  draw(x, y) {

    this.bar.clear();
    const { width, height } = this.size;

    this.bar.fillStyle(0x9B00FF);
    this.bar.fillRect(x, y, width, height);
  }
}


export default HealthBar;
