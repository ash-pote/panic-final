const vert = `

    ${includes}

    uniform float time;
    uniform float seed;

    varying vec3 v_position;
    varying vec3 v_normal;
    varying vec2 v_uv;
    varying float v_radius;


    void main () {
        vec3 newPosition = position;

        float radius = 1.0;

        float noise = fbm(0.25 * position + time * 0.6 + seed );

        radius *= mix(0.5, 1.5, noise);

        newPosition.x *= radius;

        gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );

        v_position = newPosition;
        v_normal = normal;
        v_uv = uv;
        v_radius = radius;
    }

`