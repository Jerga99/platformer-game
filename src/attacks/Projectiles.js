


import Phaser from 'phaser';
import Projectile from './Projectile';

class Projectiles extends Phaser.Physics.Arcade.Group {

  constructor(scene) {
    super(scene.physics.world, scene);

    this.createMultiple({
      frameQuantity: 5,
      active: false,
      visible: false,
      key: 'iceball',
      classType: Projectile
    })
  }

  fireProjectile() {
    const projectile = this.getFirstDead(false);

    if (!projectile) { return; }

    projectile.fire();
  }

}

export default Projectiles;
