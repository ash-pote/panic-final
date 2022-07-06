const canvases = document.querySelectorAll(".pop-canvas");

canvases.forEach(canvas => {

    const sandbox = new GlslCanvas(canvas)
    sandbox.load(frag)
    sandbox.setUniform("image", "/img/image1.jpeg")

    const sizer = function () {
        const w = canvas.parentNode.clientWidth
        const h = canvas.parentNode.clientHeight
        // const dpi = window.devicePixelRatio

        // canvas.width = w * dpi
        // canvas.height = h * dpi
    }

    sizer()
    window.addEventListener("resize", function () {
        sizer()
    })
})