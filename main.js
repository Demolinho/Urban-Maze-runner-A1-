import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 1; // Place camera inside the sphere

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load a texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('https://maps.googleapis.com/maps/api/streetview?size=600x300&location=40.720032,-73.988354&key=AIzaSyA1mUBGRbbkdKQVIVeS8K-hTek6muS6pYM');

// Create a sphere with the texture
const geometry = new THREE.SphereGeometry(5, 32, 32);
const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.01; // Rotate the sphere for a better view
    renderer.render(scene, camera);
}

animate();
