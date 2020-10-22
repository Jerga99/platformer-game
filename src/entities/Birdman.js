
import Enemy from './Enemy';
import initAnims from './anims/birdmanAnims';

class Birdman extends Enemy {
  constructor(scene, x, y) {
    super(scene, x, y, 'birdman');
    initAnims(scene.anims);
  }

  update(time, delta) {
    super.update(time, delta);
    this.play('birdman-idle', true);
  }
}

export default Birdman;
