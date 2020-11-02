

import Phaser from 'phaser';

class Hud extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x, y);

    scene.add.existing(this)

    const { rightTopCorner } = scene.config;
    this.setPosition(rightTopCorner.x - 75, rightTopCorner.y + 5);
    this.setScrollFactor(0);

    this.setupList();
  }

  setupList() {
    this.fontSize = 20;
    const scoreBoard = this.scene.add.text(0, 0, '0', {fontSize: `${this.fontSize}px`, fill: '#fff'});
    const scoreBoard2 = this.scene.add.text(0, 0, 'Hello', {fontSize: `${this.fontSize}px`, fill: '#fff'});
    const scoreBoard3 = this.scene.add.text(0, 0, 'Hello 2', {fontSize: `${this.fontSize}px`, fill: '#fff'});

    this.add([scoreBoard, scoreBoard2, scoreBoard3]);

    let lineHeight = 0;
    this.list.forEach(item => {
      item.setPosition(item.x, item.y + lineHeight);
      lineHeight += 20;
    })

  }
}

export default Hud;
