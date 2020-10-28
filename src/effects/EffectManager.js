
import SpriteEffect from './SpriteEffect';

class EffectManager {
  constructor(scene) {
    this.scene = scene;
  }

  playEffectOn(effectName, target) {
    const effect = new SpriteEffect(this.scene, 0, 0, effectName);
    effect.playOn(target);
  }
}

export default EffectManager
