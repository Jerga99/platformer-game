

import Phaser from 'phaser';

class Hud extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x, y);

    scene.add.existing(this)

    const { rightTopCorner } = scene.config;
    this.setPosition(rightTopCorner.x - 50, rightTopCorner.y + 5);
    this.setScrollFactor(0);

    this.setupList();
  }

  setupList() {
    this.fontSize = 20;
    const scoreBoard = this.scene.add.text(0, 0, '0', {fontSize: `${this.fontSize}px`, fill: '#fff'});

    this.add(scoreBoard);
  }
}

export default Hud;
