import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// initials
const renderer = new THREE.WebGLRenderer();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
);

const controls = new OrbitControls(camera, renderer.domElement);

// settings
document.getElementById("app").appendChild(renderer.domElement);
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(innerWidth, innerHeight);
camera.position.set(0, 0, 3);

// elements

// create box
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshNormalMaterial();
const box = new THREE.Mesh(boxGeometry, boxMaterial);
// add box to the scene
scene.add(box);

// functions

// animate function
const animate = () => {
  renderer.render(scene, camera);
  controls.update();
};
renderer.setAnimationLoop(animate);
