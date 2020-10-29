
import Phaser from 'phaser';

class MeleeWeapon extends Phaser.Physics.Arcade.Sprite {

  constructor(scene, x, y, weaponName) {
    super(scene, x, y, weaponName);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.damage = 15;
    this.attackSpeed = 1000;
    this.weaponAnim = weaponName + '-swing';
    this.wielder = null;

    this.setOrigin(0.5, 1);

    this.activateWeapon(false);

    this.on('animationcomplete', animation => {
      if (animation.key === this.weaponAnim) {
        this.activateWeapon(false);
        this.body.reset(0, 0);
      }
    })
  }

  swing(wielder) {
    this.wielder = wielder;
    this.activateWeapon(true);
    this.body.reset(wielder.x, wielder.y);
    this.anims.play(this.weaponAnim, true);

  }

  activateWeapon(isActive) {
    this.setActive(isActive);
    this.setVisible(isActive);
  }
}

export default MeleeWeapon;
