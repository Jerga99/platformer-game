
import Phaser from 'phaser';


class HealthBar {

  constructor(scene, x, y, health) {
    this.bar = new Phaser.GameObjects.Graphics(scene);

    this.x = x;
    this.y = y;
    this.value = health;

    this.size = {
      width: 40,
      height: 8
    }

    this.pixelPerHealth = this.size.width / this.value;

    scene.add.existing(this.bar);
  }

}


export default HealthBar;
