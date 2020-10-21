



export default {
  addCollider(otherGameobject, callback) {
    this.scene.physics.add.collider(this, otherGameobject, callback, null, this);
  }
}
