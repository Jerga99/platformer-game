
import Phaser from 'phaser';
import Player from '../entities/Player';

class Play extends Phaser.Scene {

  constructor(config) {
    super('PlayScene');
    this.config = config;
  }

  create() {
    const map = this.createMap();
    const layers = this.createLayers(map);
    const playerZones = this.getPlayerZones(layers.playerZones);
    const player = this.createPlayer(playerZones);

    this.createPlayerColliders(player, {
      colliders: {
        platformsColliders: layers.platformsColliders
      }
    });

    this.createEndOfLevel(playerZones.end);
    this.setupFollowupCameraOn(player);
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
    const playerZones = map.getObjectLayer('player_zones');

    platformsColliders.setCollisionByProperty({collides: true});

    return { environment, platforms, platformsColliders, playerZones };
  }

  createPlayer({start}) {
    return new Player(this, start.x, start.y);
  }

  createPlayerColliders(player, { colliders }) {
    player
      .addCollider(colliders.platformsColliders)
  }

  setupFollowupCameraOn(player) {
    const { height, width, mapOffset, zoomFactor } = this.config;
    this.physics.world.setBounds(0, 0, width + mapOffset, height + 200);
    this.cameras.main.setBounds(0, 0, width + mapOffset, height).setZoom(zoomFactor);
    this.cameras.main.startFollow(player);
  }

  getPlayerZones(playerZonesLayer) {
    const playerZones = playerZonesLayer.objects;
    return {
      start: playerZones.find(zone => zone.name === 'startZone'),
      end: playerZones.find(zone => zone.name === 'endZone')
    }
  }

  createEndOfLevel(end) {
    this.physics.add.sprite(end.x, end.y, 'end')
      .setAlpha(0)
      .setSize(5, 200)
      .setOrigin(0.5, 1)
  }
}

export default Play;
