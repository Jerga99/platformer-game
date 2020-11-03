
import Phaser from 'phaser';

class BaseScene extends Phaser.Scene {

  constructor(key, config) {
    super(key);
    this.config = config;
    this.screenCenter = [config.width / 2, config.height / 2];
    this.fontSize = 75;
    this.lineHeight = 82;
    this.fontOptions = {fontSize: `${this.fontSize}px`, fill: '#713E01'};
  }

  create() {
    this.add.image(0, 0, 'menu-bg')
      .setOrigin(0)
      .setScale(2.7);

    if (this.config.canGoBack) {
      const backButton = this.add.image(this.config.width - 10, this.config.height -10, 'back')
        .setOrigin(1)
        .setScale(2)
        .setInteractive()

      backButton.on('pointerup', () => {
        this.scene.start('MenuScene');
      })
    }
  }

  createMenu(menu, setupMenuEvents) {
    let lastMenuPositionY = 0;

    menu.forEach(menuItem => {
      const menuPosition = [this.screenCenter[0], this.screenCenter[1] + lastMenuPositionY];
      menuItem.textGO = this.add.text(...menuPosition, menuItem.text, this.fontOptions).setOrigin(0.5, 1);
      lastMenuPositionY += this.lineHeight;
      setupMenuEvents(menuItem);
    })
  }
}

export default BaseScene;
