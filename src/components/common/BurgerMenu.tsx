import React, { useEffect } from 'react';
import { useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import burger_menu from '../../../public/sections/air.jpg';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
// import dfat_punk from '../../../public/DAFT_PUNK_HELMETS.fbx';


function runBurgerMenu() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('burger_menu'),
    });

    renderer.setClearColor(0x000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
     
    renderer.render(scene, camera);
    
    const geometry = new THREE.SphereGeometry(15, 32, 16);
    const material = new THREE.MeshBasicMaterial({ 
        map: new THREE.TextureLoader().load(burger_menu),
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.fog = new THREE.Fog(0x5a382e, 50, 1);

    if (document?.getElementById('burger_menu')) {
        document.getElementById('burger_menu').addEventListener('mouseenter', () => {
            scene.fog = null;
        });

        document.getElementById('burger_menu').addEventListener('mouseleave', () => {
            scene.fog = new THREE.Fog(0x5a382e, 50, 1);
        });
    }

    scene.add(sphere);
    const controls = new OrbitControls(camera, renderer.domElement);

    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        sphere.rotation.x += 0.002;
        sphere.rotation.y += 0.002;
        sphere.rotation.z += 0.004;
        renderer.render(scene, camera);
    }
      
    animate();
}



function runMainMenu() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('full_menu'),
    });

    renderer.setClearColor(0x000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
     
    renderer.render(scene, camera);
}



export const BurgerMenu = () => {
    const [isShowFullMenu, setShowFullMenu] = useState(false);

    useEffect(() => {
        runBurgerMenu();

        if (isShowFullMenu) {
            runMainMenu();
        }
    }, [ isShowFullMenu ]);

    return <>
        <div className={`fixed w-screen h-screen top-0 bg-black ${isShowFullMenu ? 'left-0' : 'left-full'} transition-all`}>
            <canvas id="full_menu">
                {/* make lava lamp effect */}
                {/* effect */}
                {/* settings */}
            </canvas>
        </div>


        <canvas className={`fixed !w-[320px] rounded-full !h-[290px] top-0 right-0 translate-x-1/2 -translate-y-1/2 cursor-pointer`} onClick={() => {
            setShowFullMenu(true);
        }} id="burger_menu"></canvas>   
    </>   
}