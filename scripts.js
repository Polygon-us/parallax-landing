let scene = document.getElementById("scene")

let parallaxInstance = new Parallax(scene, {
    relativeInput: true,
})
parallaxInstance.friction(0.05, 0.05)
