

import Phaser from 'phaser';

class Hud extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x, y);

    scene.add.existing(this)

    const { rightTopCorner } = scene.config;

    this.containerWidth = 70;
    this.setPosition(rightTopCorner.x - this.containerWidth, rightTopCorner.y + 10);
    this.setScrollFactor(0);
    this.setDepth(99);

    this.fontSize = 20;
    this.setupList();
  }

  setupList() {
    const scoreBoard = this.createScoreboard();

    this.add([scoreBoard]);

    let lineHeight = 0;
    this.list.forEach(item => {
      item.setPosition(item.x, item.y + lineHeight);
      lineHeight += 20;
    })
  }

  createScoreboard() {
    const scoreText = this.scene.add.text(0, 0, '0', {fontSize: `${this.fontSize}px`, fill: '#fff'});
    const scoreImage = this.scene.add.image(scoreText.width + 5, 0, 'diamond')
      .setOrigin(0)
      .setScale(1.3);

    const scoreBoard = this.scene.add.container(0,0, [scoreText, scoreImage]);
    scoreBoard.setName('scoreBoard');
    return scoreBoard
  }

  updateScoreboard(score) {
    const [scoreText, scoreImage] = this.getByName('scoreBoard').list;
    scoreText.setText(score);
    scoreImage.setX(scoreText.width + 5);
  }
}

export default Hud;
