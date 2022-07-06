const frag = `
#ifdef GL_ES
precision highp float;
#endif
#define MAX 6
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 mouse;
uniform sampler2D image1;
varying vec3 v_normal;
varying vec2 v_texcoord;
#define NUM_OCTAVES 5
 vec2 aspect(vec2 uv, float texture_ratio, float canvas_ratio) {
    
    // if canvas is too portrait for the texture, stretch dwonwards
    // else canvas too landscape for the texture, stretch down
    if (texture_ratio > canvas_ratio) {
        float diff = canvas_ratio / texture_ratio;
        uv.x *= diff;
        uv.x += (1.0 - diff) / 2.0;
    } else {
        float diff = texture_ratio / canvas_ratio;
    }
 
    return uv;
 }
void main(void)
{
    vec2 uv = v_texcoord;
    
    // find out the aspect ratios
    float texture_ratio = 1200.0 / 1000.0;
    float canvas_ratio = u_resolution.x / u_resolution.y;
    
    // copy the original coordinate system
    vec2 coords = aspect(uv, texture_ratio, canvas_ratio);
    
    vec2 distortion = 0.1 * vec2(
        sin(u_time * 2.0 + uv.x * 1.0 + uv.y * 1.5),
        cos(u_time * 2.0 + uv.x *1.1 + uv.y * 2.0)
    );
    
    vec4 color = texture2D(image1, coords + distortion);
    
    gl_FragColor = color;
}

`