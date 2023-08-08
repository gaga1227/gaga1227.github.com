window.LIVE_BG_FEATURES = {
  STATS: true,
};

function initLiveBg() {
  // vars
  let stats;
  let scene;
  let renderer;
  let camera;
  let cameraControls;
  let object;
  let views = [];

  // constants
  const CAM_Z_INIT = 10000;
  const CAM_Z_END = 20;
  const SWATCH = {
    BLUE: 0x0076a7,
    BLUE_LITE: 0x00ddff,
    YELLOW: 0xffd200,
    YELLOW_LITE: 0xffff00,
  };

  // populate scene
  const populateScene = () => {
    // material
    const material1 = new THREE.MeshPhongMaterial({
      color: SWATCH.YELLOW,
      shading: THREE.FlatShading,
      side: THREE.DoubleSide,
      opacity: 0.8,
      transparency: true,
    });
    const material2 = new THREE.MeshPhongMaterial({
      color: SWATCH.YELLOW_LITE,
      shading: THREE.FlatShading,
      side: THREE.DoubleSide,
      opacity: 0.5,
      transparency: true,
    });

    // geometry
    const geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(-1, 1, 0));
    geometry.vertices.push(new THREE.Vector3(-1, -1, 0));
    geometry.vertices.push(new THREE.Vector3(1, -1, 0));
    geometry.faces.push(new THREE.Face3(0, 1, 2, new THREE.Vector3(0, 0, 1)));

    // object and meshes
    const maxMeshes = 20;
    object = new THREE.Object3D();
    for (let i = 0; i < maxMeshes; i++) {
      const material = i < maxMeshes * 0.6 ? material1 : material2;
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position
        .set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5)
        .normalize();
      mesh.position.multiplyScalar(Math.random() * 15);
      mesh.rotation.set(
        Math.random() * 2,
        Math.random() * 2,
        Math.random() * 2,
      );
      mesh.scale.x = mesh.scale.y = mesh.scale.z = 8; // Math.random() * 0.5+ 0.05;
      object.add(mesh);
    }

    // add to scene
    scene.add(object);

    // lights
    scene.add(new THREE.AmbientLight(0xffffff));
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 0);
    scene.add(light);
  };

  // update scene
  const updateScene = () => {
    // camera
    if (Math.round(camera.position.z) > CAM_Z_END) {
      camera.position.z -= (camera.position.z - CAM_Z_END) * 0.1;
    }

    // meshes
    for (let i = 0; i < object.children.length; i++) {
      const mesh = object.children[i];
      mesh.rotation.x += mesh.scale.x * 0.0001;
      mesh.rotation.y += mesh.scale.y * 0.0001;
      mesh.rotation.z += mesh.scale.z * 0.0001;
    }
  };

  // render the scene
  const render = () => {
    updateScene();
    cameraControls.update();
    renderer.render(scene, camera);

    // sync result to all views
    // ref: https://github.com/mrdoob/three.js/blob/35ae830a7c4544582ed2759e5b18c5d6ef37c6d9/examples/webgl_multiple_canvases_grid.html#L119
    views.forEach((viewCanvas, index) => {
      viewCanvas.width = window.innerWidth;
      viewCanvas.height = window.innerHeight;
      const context = viewCanvas.getContext('2d');
      context.drawImage(renderer.domElement, 0, 0);
    });
  };

  // animation loop
  const animate = () => {
    // loop on request animation loop
    // - it has to be at the start of the function
    // - see details at http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
    requestAnimationFrame(animate);

    // do render
    render();

    // update stats
    if (
      LIVE_BG_FEATURES.STATS &&
      !!stats &&
      typeof stats.update === 'function'
    ) {
      stats.update();
    }
  };

  // init the scene
  const initScene = () => {
    // setup renderer
    renderer = new THREE.CanvasRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.getElementById('liveBg').appendChild(renderer.domElement);

    // populate view canvas refs
    views = [
      document.getElementById('liveBgView1'),
      document.getElementById('liveBgView2'),
      document.getElementById('liveBgView3'),
      document.getElementById('liveBgView4'),
    ];

    // add Stats.js - https://github.com/mrdoob/stats.js
    if (LIVE_BG_FEATURES.STATS) {
      stats = new Stats();
      stats.domElement.style.position = 'absolute';
      stats.domElement.style.top = '0';
      stats.domElement.style.left = '0';
      document.body.appendChild(stats.domElement);
    }

    // create a scene
    scene = new THREE.Scene();

    // put a camera in the scene
    camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      1,
      10000,
    );
    camera.position.set(0, 0, CAM_Z_INIT);
    scene.add(camera);

    // setup a camera control
    cameraControls = new THREEx.DragPanControls(camera);

    // transparently support window resize
    THREEx.WindowResize.bind(renderer, camera);

    // populate the scene
    populateScene();
  };

  // init scene
  if (!initScene()) {
    animate();
  }
}
