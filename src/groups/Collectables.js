
import Phaser from 'phaser';
import Collectable from '../collectables/Collectable';


class Collectables extends Phaser.Physics.Arcade.StaticGroup {
  constructor(scene) {
    super(scene.physics.world, scene);

    this.createFromConfig({
      classType: Collectable
    })
  }

  mapProperties(propertiesList) {
    if (!propertiesList || propertiesList.length === 0) { return; }

    return propertiesList.reduce((map, obj) => {
      map[obj.name] = obj.value;
      return map;
    }, {})
  }

  addFromLayer(layer) {
    const properties = this.mapProperties(layer.properties);

    layer.objects.forEach(collectableO => {
      this.get(collectableO.x, collectableO.y, properties.type)
    })
  }
}

export default Collectables;
