// vars
var stats, scene, renderer, 
	camera, cameraControls, camZInit = 10000, camZEnd = 20,
	geometry, meshes, object, total = 20,
	material, material1, material12,
	light, 
	swatch = { blue:0x0076A7, blueLite:0x00DDFF, yellow:0xFFD200, yellowLite:0xFFFF00 }, 
	theme = swatch.blue;
	
// populate scene
function populateScene(){
	
	//mat
	material1 = new THREE.MeshPhongMaterial( {
		color: swatch.yellow,
		shading: THREE.FlatShading,
		side: THREE.DoubleSide,
		opacity: 0.8,
		transparency: true
	} );
	material2 = new THREE.MeshPhongMaterial( {
		color: swatch.yellowLite,
		shading: THREE.FlatShading,
		side: THREE.DoubleSide,
		opacity: 0.4,
		transparency: true
	} );

	//geo
	//geometry = new THREE.TetrahedronGeometry( 1 );
	geometry = new THREE.Geometry();
	geometry.vertices.push( new THREE.Vector3( -1, 1, 0 ) ); 
	geometry.vertices.push( new THREE.Vector3( -1, -1, 0 ) ); 
	geometry.vertices.push( new THREE.Vector3( 1, -1, 0 ) );
	geometry.faces.push( new THREE.Face3( 0, 1, 2, new THREE.Vector3( 0, 0, 1 ) ) );

	//obj
	meshes = [];
	object = new THREE.Object3D();
	for ( var i = 0; i < total; i++ ) {

		material = ( i < total * 0.6 ) ? material1 : material2;
		//console.log(material);

		var mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5 ).normalize();
		mesh.position.multiplyScalar( Math.random() * 15 );
		mesh.rotation.set( Math.random() * 2, Math.random() * 2, Math.random() * 2 );
		mesh.scale.x = mesh.scale.y = mesh.scale.z = 8; //Math.random() * 0.5+ 0.05;
		object.add( mesh );

		meshes.push( mesh );

	}

	//add to scene
	//scene.add( mesh );
	scene.add( object );

	//light
	scene.add( new THREE.AmbientLight( 0xffffff ) );
	light = new THREE.DirectionalLight( 0xffffff, 1 );
	light.position.set( 0, 1, 0 );
	scene.add( light );

	
}

// update scene
function updateScene(){

	//cam
	if ( Math.round(camera.position.z) > camZEnd ) {
		camera.position.z -= (camera.position.z - camZEnd) * 0.1;
		//console.log(camera.position.z);
	}

	//obj
	//object.rotation.x += 0.001;
	//object.rotation.y += 0.001;
	//object.rotation.z += 0.001;

	//mesh
	for ( var i = 0; i < object.children.length; i++ ) {

		var mesh = object.children[i];
		mesh.rotation.x += mesh.scale.x * 0.0001;
		mesh.rotation.y += mesh.scale.y * 0.0001;
		mesh.rotation.z += mesh.scale.z * 0.0001;

	}

}

// init the scene
function init(){

	//renderer
	if( Detector.canvas ) {
		renderer = new THREE.CanvasRenderer();
	}else{
		//insert image
	}
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.getElementById('bgLive').appendChild(renderer.domElement);

	// add Stats.js - https://github.com/mrdoob/stats.js
	stats = new Stats();
	stats.domElement.style.position	= 'absolute';
	stats.domElement.style.top	= '0px';
	document.body.appendChild( stats.domElement );

	// create a scene
	scene = new THREE.Scene();

	// put a camera in the scene
	camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.set(0, 0, camZInit);
	//camera.lookAt(new THREE.Vector3(window.innerWidth * -2.5, window.innerHeight * 2.5, 0));
	scene.add(camera);

	// create a camera contol
	cameraControls = new THREEx.DragPanControls(camera);
	/*
	cameraControls.target = new THREE.Vector3(0, 0, 0);
	cameraControls.speedX = 0.5;
	cameraControls.speedY = 0.5;
	cameraControls.rangeX = -40;
	cameraControls.rangeY = +40;
	*/

	// transparently support window resize
	THREEx.WindowResize.bind(renderer, camera);
	
	//populate the scene
	populateScene();
	
}

// render the scene
function render() {

	// update scene
	updateScene();

	// update camera controls
	cameraControls.update();

	// actually render the scene
	renderer.render( scene, camera );

}

// animation loop
function animate() {
			
	// loop on request animation loop
	// - it has to be at the begining of the function
	// - see details at http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	requestAnimationFrame( animate );

	// do the render
	render();

	// update stats
	stats.update();
}

// init scene
if( !init() ) animate();