
import Enemy from './Enemy';
import initAnims from './anims/snakyAnims';

class Snaky extends Enemy {
  constructor(scene, x, y) {
    super(scene, x, y, 'snaky');
    initAnims(scene.anims);
  }

  init() {
    super.init();
    this.speed = 50;
  }

  update(time, delta) {
    super.update(time, delta);

    if (!this.active) { return; }
    if (this.isPlayingAnims('snaky-hurt')) { return; }

    this.play('snaky-walk', true);
  }

  takesHit(source) {
    super.takesHit(source);
    this.play('snaky-hurt', true);
  }
}

export default Snaky;
