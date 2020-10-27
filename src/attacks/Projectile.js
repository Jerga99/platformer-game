
import Phaser from 'phaser';


class Projectile extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.speed = 300;
    this.maxDistance = 200;
    this.traveledDistance = 0;
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    this.traveledDistance += this.body.deltaAbsX();

    if (this.traveledDistance >= this.maxDistance) {
      this.destroy();
    }
  }

  fire() {
    console.log('Firing the projectile');
    this.setVelocityX(this.speed);
  }

}

export default Projectile;
