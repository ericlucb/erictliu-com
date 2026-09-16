import {Box3, Matrix4} from 'three';

// Convert one mesh to world-space vertices without moving it or its siblings.
export function bakeWorldTransform(object) {
  object.updateWorldMatrix(true, false);
  object.geometry.applyMatrix4(object.matrixWorld);
  const inverse = object.parent ? object.parent.matrixWorld.clone().invert() : new Matrix4();
  inverse.decompose(object.position, object.quaternion, object.scale);
  object.updateMatrixWorld(true);
  return new Box3().setFromObject(object);
}
