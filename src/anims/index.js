


export default anims => {
  anims.create({
    key: 'hit-effect',
    frames: anims.generateFrameNumbers('hit-sheet', {start: 0, end: 4}),
    frameRate: 10,
    repeat: 0
  });

  anims.create({
    key: 'sword-default-swing',
    frames: anims.generateFrameNumbers('sword-default', {start: 0, end: 2}),
    frameRate: 20,
    repeat: 0
  });

  anims.create({
    key: 'fireball',
    frames: [
      { key: 'fireball-1'},
      { key: 'fireball-2'},
      { key: 'fireball-3'}
    ],
    frameRate: 5,
    repeat: -1
  })

  anims.create({
    key: 'iceball',
    frames: [
      { key: 'iceball-1'},
      { key: 'iceball-2'}
    ],
    frameRate: 5,
    repeat: -1
  })

  anims.create({
    key: 'diamond-shine',
    frames: [
      { key: 'diamond-1'},
      { key: 'diamond-2'},
      { key: 'diamond-3'},
      { key: 'diamond-4'},
      { key: 'diamond-5'},
      { key: 'diamond-6'}
    ],
    frameRate: 5,
    repeat: -1
  })
}
