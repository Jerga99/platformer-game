
import Enemy from './Enemy';
import initAnims from './anims/birdmanAnims';

class Birdman extends Enemy {
  constructor(scene, x, y) {
    super(scene, x, y, 'birdman');
    initAnims(scene.anims);
  }

  update(time, delta) {
    super.update(time, delta);

    if (!this.active) { return; }
    if (this.isPlayingAnims('birdman-hurt')) { return; }

    this.play('birdman-idle', true);
  }

  takesHit(source) {
    super.takesHit(source);
    this.play('birdman-hurt', true);
  }
}

export default Birdman;
