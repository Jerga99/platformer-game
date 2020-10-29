
import Phaser from 'phaser';

class MeleeWeapon extends Phaser.Physics.Arcade.Sprite {

  constructor(scene, x, y, weaponName) {
    super(scene, x, y, weaponName);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.damage = 15;
    this.attackSpeed = 1000;
    this.weaponName = weaponName;
    this.wielder = null;

    this.activateWeapon(false);
  }

  swing(wielder) {
    this.wielder = wielder;
    this.activateWeapon(true);
    this.body.reset(wielder.x, wielder.y);

  }

  activateWeapon(isActive) {
    this.setActive(isActive);
    this.setVisible(isActive);
  }
}

export default MeleeWeapon;
