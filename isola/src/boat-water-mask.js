// The sea must not render through the open interior of a watertight hull.
// Blender derives this convex outline from the boat's actual sea intersection.
export function validateWaterline(data) {
  const p = data?.polygon;
  if (!Array.isArray(p) || p.length < 3 || p.length > 32 ||
      !p.every(v => Array.isArray(v) && v.length === 2 && v.every(Number.isFinite)) ||
      !Array.isArray(data.center) || data.center.length !== 2 ||
      !data.center.every(Number.isFinite)) {
    throw new Error('Invalid boat waterline');
  }
  if (!insideWaterline(data.center, p) ||
      p.some(v => Math.hypot(v[0]-data.center[0], v[1]-data.center[1]) > 2)) {
    throw new Error('Boat waterline exceeds shader bounds or has invalid winding');
  }
  return data;
}
export function insideWaterline(point, polygon) {
  return polygon.every((a, i) => {
    const b = polygon[(i + 1) % polygon.length];
    return (b[0]-a[0])*(point[1]-a[1])-(b[1]-a[1])*(point[0]-a[0]) >= -1e-7;
  });
}
export const BOAT_WATER_MASK_GLSL = `
  uniform int uBoatPointCount;
  uniform vec2 uBoatPoints[32];
  uniform vec2 uBoatCenter;
  bool insideBoat(vec2 p) {
    if (uBoatPointCount < 3 || distance(p, uBoatCenter) > 2.0) return false;
    for (int i=0; i<32; i++) {
      if (i >= uBoatPointCount) break;
      int next = i+1;
      if (next == uBoatPointCount) next=0;
      vec2 a=uBoatPoints[i], b=uBoatPoints[next];
      vec2 edge=b-a, rel=p-a;
      if (edge.x*rel.y-edge.y*rel.x < -0.0000001) return false;
    }
    return true;
  }
`;
