
import Phaser from 'phaser';
import Player from '../entities/Player';

class Play extends Phaser.Scene {

  constructor() {
    super('PlayScene');
  }

  create() {
    const map = this.createMap();
    const layers = this.createLayers(map);

    this.player = this.createPlayer();

    this.playerSpeed = 200;
    this.physics.add.collider(this.player, layers.platformsColliders);
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  createMap() {
    const map = this.make.tilemap({key: 'map'});
    map.addTilesetImage('main_lev_build_1', 'tiles-1');
    return map;
  }

  createLayers(map) {
    const tileset = map.getTileset('main_lev_build_1');
    const platformsColliders = map.createStaticLayer('platforms_colliders', tileset);
    const environment = map.createStaticLayer('environment', tileset);
    const platforms = map.createStaticLayer('platforms', tileset);

    platformsColliders.setCollisionByProperty({collides: true});

    return { environment, platforms, platformsColliders };
  }

  createPlayer() {
    const player = new Player(this, 100, 250);
    player.body.setGravityY(500);
    player.setCollideWorldBounds(true);
    return player;
  }

  update() {
    const { left, right } = this.cursors;

    if (left.isDown) {
      this.player.setVelocityX(-this.playerSpeed);
    } else if (right.isDown) {
      this.player.setVelocityX(this.playerSpeed);
    } else {
      this.player.setVelocityX(0);
    }
  }
}

export default Play;
