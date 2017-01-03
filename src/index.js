const {
  Engine, Scene, ArcRotateCamera, Vector3, ScreenSpaceCanvas2D, Size,
  Rectangle2D, Text2D, Color4, Lines2D, Vector2
} = BABYLON

const main = () => {
  const canvas = document.getElementById('canvas')
  const {width, height} = canvas.getBoundingClientRect()
  const engine = new Engine(canvas)
  const scene = new Scene(engine)
  const camera = new ArcRotateCamera('Camera', 0, Math.PI / 2, 12, Vector3.Zero(), scene)
  const canvas2d = new ScreenSpaceCanvas2D(scene, {
    size: new Size(width * 2, height * 2),
    backgroundFill: '#ff0000ff'
  })
  const rect = new Rectangle2D({
    parent: canvas2d,
    x: 400, y: 400,
    width: 100, height: 100,
    fill: '#00ff00ff',
    children: [
      new Text2D('yoyo', {
        marginAlignment: 'h: center, v: center',
        fontName: '30pt Arial',
        defaultFontColor: new Color4(0, 0, 0, 1)
      })
    ]
  })
  const lines = new Lines2D([
    new Vector2(500, 500),
    new Vector2(550, 500),
    new Vector2(600, 600)
  ], {
    parent: canvas2d,
    fill: '#ffffffff',
    fillThickness: 20,
    endCap: Lines2D.ArrowCap
  })

  camera.attachControl(canvas, false)

  scene.render()
}

document.addEventListener('DOMContentLoaded', main)
