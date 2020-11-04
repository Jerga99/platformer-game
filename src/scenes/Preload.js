
import Phaser from 'phaser';

class Preload extends Phaser.Scene {

  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.tilemapTiledJSON('level_1', 'assets/crystal_world_map_level_1.json');
    this.load.tilemapTiledJSON('level_2', 'assets/crystal_world_map_level_2.json');

    this.load.image('tiles-1', 'assets/main_lev_build_1.png');
    this.load.image('tiles-2', 'assets/main_lev_build_2.png');
    this.load.image('bg-spikes-tileset', 'assets/bg_spikes_tileset.png');

    this.load.image('bg-spikes-dark', 'assets/bg_spikes_dark.png');
    this.load.image('sky-play', 'assets/sky_play.png');

    this.load.image('menu-bg', 'assets/background01.png');
    this.load.image('back', 'assets/back.png');

    this.load.image('iceball-1', 'assets/weapons/iceball_001.png');
    this.load.image('iceball-2', 'assets/weapons/iceball_002.png');

    this.load.image('fireball-1', 'assets/weapons/improved_fireball_001.png');
    this.load.image('fireball-2', 'assets/weapons/improved_fireball_002.png');
    this.load.image('fireball-3', 'assets/weapons/improved_fireball_003.png');

    this.load.image('diamond', 'assets/collectables/diamond.png');

    this.load.image('diamond-1', 'assets/collectables/diamond_big_01.png');
    this.load.image('diamond-2', 'assets/collectables/diamond_big_02.png');
    this.load.image('diamond-3', 'assets/collectables/diamond_big_03.png');
    this.load.image('diamond-4', 'assets/collectables/diamond_big_04.png');
    this.load.image('diamond-5', 'assets/collectables/diamond_big_05.png');
    this.load.image('diamond-6', 'assets/collectables/diamond_big_06.png');

    this.load.spritesheet('player', 'assets/player/move_sprite_1.png', {
      frameWidth: 32, frameHeight: 38, spacing: 32
    })

    this.load.spritesheet('player-slide-sheet', 'assets/player/slide_sheet_2.png', {
      frameWidth: 32, frameHeight: 38, spacing: 32
    })

    this.load.spritesheet('birdman', 'assets/enemy/enemy_sheet.png', {
      frameWidth: 32, frameHeight: 64, spacing: 32
    })

    this.load.spritesheet('snaky', 'assets/enemy/enemy_sheet_2.png', {
      frameWidth: 32, frameHeight: 64, spacing: 32
    })

    this.load.spritesheet('player-throw', 'assets/player/throw_attack_sheet_1.png', {
      frameWidth: 32, frameHeight: 38, spacing: 32
    })

    this.load.spritesheet('hit-sheet', 'assets/weapons/hit_effect_sheet.png', {
      frameWidth: 32, frameHeight: 32
    })

    this.load.spritesheet('sword-default', 'assets/weapons/sword_sheet_1.png', {
      frameWidth: 52, frameHeight: 32, spacing: 16
    })

    this.load.audio('theme', 'assets/music/theme_music.wav');

    this.load.audio('projectile-launch', 'assets/music/projectile_launch.wav');
    this.load.audio('step', 'assets/music/step_mud.wav');
    this.load.audio('jump', 'assets/music/jump.wav');
    this.load.audio('swipe', 'assets/music/swipe.wav');
    this.load.audio('coin-pickup', 'assets/music/coin_pickup.wav');

    const prod = process.env.FB_ENV || process.env.NODE_ENV === 'production';

    this.load.on('progress', value => {
      prod && FBInstant.setLoadingProgress(value * 100);
    })

    this.load.once('complete', () => {
      if (prod) {
        FBInstant.startGameAsync().then(() => {
          this.startGame();
        })
      } else {
        this.startGame();
      }
    })
  }

  startGame() {
    this.registry.set('level', 1);
    this.registry.set('unlocked-levels', 1);

    this.scene.start('MenuScene')
  }

  // create() {
  //   this.scene.start('PlayScene')
  // }
}

export default Preload;
