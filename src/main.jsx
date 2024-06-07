import * as three from 'three';
import "./index.css";
import { OrbitControls } from 'three/examples/jsm/Addons.js';
console.log(OrbitControls);
const scene = new three.Scene();
const cubeGeometry = new three.BoxGeometry(1, 1, 1);
const cubeMaterial = new three.MeshBasicMaterial({ color: "yellow" });
const mess = new three.Mesh(
    cubeGeometry,
    cubeMaterial
);
scene.add(mess); // to add in the scence 
const camera = new three.PerspectiveCamera(5, window.innerWidth / window.innerHeight, 4.5, 1000);
camera.position.z = 55;
const canvas = document.querySelector('canvas.threejs');

const renderer =new three.WebGLRenderer({ canvas });


const controls = new OrbitControls(camera,canvas)
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 11;
renderer.setSize(window.innerWidth, window.innerHeight);

const rederloop =()=>{
controls.update();    
    renderer.render(scene, camera);
window.requestAnimationFrame(rederloop);

    }
    rederloop();


