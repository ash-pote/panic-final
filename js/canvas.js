const canvases = document.querySelectorAll(".pop-canvas");

canvases.forEach(canvas => {
    const image = canvas.getAttribute("data-image")


    const sandbox = new GlslCanvas(canvas)
    sandbox.load(frag)
    sandbox.setUniform("image", "https://panic-final-development.netlify.app/" + image )

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