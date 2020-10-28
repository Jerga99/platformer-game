

import Phaser from 'phaser';


class SpriteEffect extends Phaser.Physics.Arcade.Sprite {

  constructor(scene, x, y, effectName) {
    super(scene, x, y);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.target = null;
    this.effectName = effectName;

    this.on('animationcomplete', animation => {
      if (animation.key === this.effectName) {
        this.destroy();
      }
    }, this)
  }

  placeEffect() {
    if (!this.target || !this.body) { return; }
    const center = this.target.getCenter();
    this.body.reset(center.x, center.y);
  }

  playOn(target) {
    this.target = target;
    this.play(this.effectName, true);
    this.placeEffect();
  }
}

export default SpriteEffect;
