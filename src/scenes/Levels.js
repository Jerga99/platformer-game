
import BaseScene from './BaseScene';

class LevelScene extends BaseScene {

  constructor(config) {
    super('LevelScene', {...config, canGoBack: true});
  }

  create() {
    super.create();

    this.menu = [];
    const levels = this.registry.get('unlocked-levels');

    for (let i = 1; i <= levels; i++) {
      this.menu.push({
        scene: 'PlayScene', text: `Level ${i}`, level: i
      })
    }

    this.createMenu(this.menu, this.setupMenuEvents.bind(this));
  }

  setupMenuEvents(menuItem) {
    const textGO = menuItem.textGO;
    textGO.setInteractive();

    textGO.on('pointerover', () => {
      textGO.setStyle({fill: '#ff0'});
    })

    textGO.on('pointerout', () => {
      textGO.setStyle({fill: '#713E01'});
    })

    textGO.on('pointerup', () => {
      if (menuItem.scene) {
        this.registry.set('level', menuItem.level);
        this.scene.start(menuItem.scene);
      }

      if (menuItem.text === 'Exit') {
        this.game.destroy(true);
      }
    })
  }
}

export default LevelScene;

