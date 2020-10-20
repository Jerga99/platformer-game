


export default anims => {
  anims.create({
    key: 'idle',
    frames: anims.generateFrameNumbers('player', {start: 0, end: 8}),
    frameRate: 8,
    repeat: -1
  })

  anims.create({
    key: 'run',
    frames: anims.generateFrameNumbers('player', {start: 11, end: 16}),
    frameRate: 8,
    repeat: -1
  })

  anims.create({
    key: 'jump',
    frames: anims.generateFrameNumbers('player', {start: 17, end: 23}),
    frameRate: 2,
    repeat: 1
  })
}
