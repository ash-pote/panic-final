const vert = `

    ${includes}
    uniform float time;
    uniform float seed;

    void main () {
        vec3 newPosition = position;

        newPosition *= 0.95;

        gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
    }

`