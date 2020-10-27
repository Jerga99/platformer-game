
import Phaser from 'phaser';


class Projectile extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.speed = 300;
  }

  fire() {
    console.log('Firing the projectile');
    this.setVelocityX(this.speed);
  }

}

export default Projectile;
