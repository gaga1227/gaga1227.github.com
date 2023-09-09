function initLiveBg() {
  // -------------------------------------------------------------
  // constants
  const DEBUG = false;
  const COLORS = {
    WHITE: 0xffffff,
    YELLOW: 0xffd200,
    YELLOW_LITE: 0xffff00,
  };
  // mesh
  const MESH_COUNT = 20;
  const MESH_SIZE = 1;
  const MESH_SCALE = 8;
  // cam
  const CAM_PERSPECTIVE = 35;
  const CAM_CLIP_RANGE = [1, 2000];
  // anim
  const ANIM_CAM_POS_Z = [1000, 20];
  const ANIM_CAM_EASING = 0.1;
  const ANIM_MESH_ROTATION_FACTOR = 0.0001;

  // -------------------------------------------------------------
  // utils
  const getAspect = () => {
    return window.innerWidth / window.innerHeight;
  };
  const easeCamPos = (axis, target) => {
    if (Math.round(camera.position[axis]) > target) {
      camera.position[axis] -=
        (camera.position[axis] - target) * ANIM_CAM_EASING;
    }
  };
  const createMeshes = ({ count = 1 } = {}) => {
    const meshes = [];
    // materials
    const matProps = {
      side: THREE.DoubleSide,
      flatShading: true,
      transparent: true,
    };
    const material1 = new THREE.MeshPhongMaterial({
      color: COLORS.YELLOW,
      opacity: 0.8,
      ...matProps,
    });
    const material2 = new THREE.MeshPhongMaterial({
      color: COLORS.YELLOW_LITE,
      opacity: 0.6,
      ...matProps,
    });
    // utils
    const getRandomPos = () => Math.random() - 0.5;
    const getRandomRotation = () => Math.random() * 2;
    const getRandomScalar = () => Math.random() * 15;
    // fill meshes loop
    Array(count)
      .fill('')
      .forEach((item, index) => {
        // shape
        const shape = new THREE.Shape();
        const x = 0;
        const y = 0;
        shape.moveTo(x - MESH_SIZE, y - MESH_SIZE);
        shape.lineTo(x + MESH_SIZE, y - MESH_SIZE);
        shape.lineTo(x - MESH_SIZE, y + MESH_SIZE);
        // geo
        const geometry = new THREE.ShapeGeometry(shape);
        // material
        const material = index < count * 0.6 ? material1 : material2;
        // mesh
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position
          .set(getRandomPos(), getRandomPos(), getRandomPos())
          .normalize();
        mesh.position.multiplyScalar(getRandomScalar());
        mesh.rotation.set(
          getRandomRotation(),
          getRandomRotation(),
          getRandomRotation(),
        );
        mesh.scale.x = mesh.scale.y = mesh.scale.z = MESH_SCALE;
        meshes.push(mesh);
      });
    return meshes;
  };

  // -------------------------------------------------------------
  // setup: cam
  const camera = new THREE.PerspectiveCamera(
    CAM_PERSPECTIVE,
    getAspect(),
    CAM_CLIP_RANGE[0],
    CAM_CLIP_RANGE[1],
  );
  camera.position.set(0, 0, ANIM_CAM_POS_Z[0]);
  // setup: renderer
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  // setup: views
  const views = [
    document.getElementById('liveBgView1'),
    document.getElementById('liveBgView2'),
    document.getElementById('liveBgView3'),
    document.getElementById('liveBgView4'),
  ];
  renderer.setSize(window.innerWidth, window.innerHeight);
  // setup: scene
  const scene = new THREE.Scene();
  // setup: fog
  scene.fog = new THREE.FogExp2(COLORS.WHITE, 0.025);
  // setup: window resize
  THREEx.WindowResize.bind(renderer, camera);
  // setup: control
  const cameraControls = new THREEx.DragPanControls(camera);
  // setup: stats
  const stats = new Stats();
  stats.showPanel && stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
  DEBUG && document.body.appendChild(stats.dom);

  // -------------------------------------------------------------
  // mesh / materials / scene
  // spheres
  const meshes = createMeshes({
    count: MESH_COUNT,
  });
  // scene group
  const group = new THREE.Group();
  group.add(...meshes);
  scene.add(group);
  // light
  const ambientLight = new THREE.AmbientLight(COLORS.WHITE, 3);
  scene.add(ambientLight);

  // -------------------------------------------------------------
  // render
  const updateScene = () => {
    // camera
    easeCamPos('z', ANIM_CAM_POS_Z[1]);
    // meshes
    meshes.forEach((mesh) => {
      mesh.rotation.x += mesh.scale.x * ANIM_MESH_ROTATION_FACTOR;
      mesh.rotation.y += mesh.scale.y * ANIM_MESH_ROTATION_FACTOR;
      mesh.rotation.z += mesh.scale.z * ANIM_MESH_ROTATION_FACTOR;
    });
  };
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

  // -------------------------------------------------------------
  // init and loop
  const animateLoop = function () {
    requestAnimationFrame(animateLoop);
    DEBUG && stats.begin && stats.begin();
    render();
    DEBUG && stats.end && stats.end();
  };
  animateLoop();
}
