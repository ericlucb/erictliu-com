// A warm painted solar disk evaluated along the same ray in sky and glass.
// Blue-sky coverage lets the original painted clouds obscure the disk.
export const PAINTED_SUN_GLSL = `
uniform vec3 uVisibleSun;
uniform float uVisibleSunOn;
vec3 paintedSun(vec3 direction, vec3 sky) {
 vec3 ray=normalize(direction);
 // Twice the apparent diameter, shared by sky and reflected glazing.
 float radius=length(ray-normalize(uVisibleSun))/2.0;
 float clearSky=smoothstep(.03,.16,sky.b-sky.r)
               *smoothstep(.90,1.14,sky.b/max(sky.g,.001));
 float brush=sin(ray.x*2800.0+ray.y*1400.0)*sin(ray.z*2100.0-ray.y*3300.0);
 float disk=1.0-smoothstep(.0075,.0112,radius+brush*.00022);
 float halo=exp(-radius*radius/.00125)*.15;
 float corona=exp(-radius*radius/.00018)*.13;
 float coverage=uVisibleSunOn*clearSky;
 vec3 warm=vec3(1.0,.83,.56);
 return mix(sky,warm,disk*coverage*.95)
      +vec3(1.0,.68,.31)*(halo+corona)*coverage;
}
`;
