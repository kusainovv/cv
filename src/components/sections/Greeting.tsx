import React, { useState, useEffect } from "react";
import * as THREE from 'three';
import mirror from '../../../public/sections/air.png';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function runSphere() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        canvas: document.getElementById('sphere')
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    camera.position.setZ(30);

    renderer.render(scene, camera);

    const geometry = new THREE.SphereGeometry( 15, 32, 16 );
    const texture = new THREE.TextureLoader();
    const material = new THREE.MeshPhysicalMaterial( { 
        map: texture.load(mirror),
        cleacoatRoughness: 1,
        metalness: 0.9,
        ior: 1,
        roughness: 0.5,
        // color: 0x8418ca,
        normalMap: texture.load(mirror),
        normalScale: new THREE.Vector2(0.15, 0.15, 0.15)
    });

    const light = new THREE.PointLight("#392c33", 20);
    light.position.set(30,30,30);
    scene.add(light);
    
    const sphere = new THREE.Mesh( geometry, material );
    scene.add( sphere );

    const controls = new OrbitControls(camera, renderer.domElement);
    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.0075;
        sphere.rotation.x += 0.0075;
        sphere.rotation.z += 0.0075;
        controls.update();
        renderer.render(scene, camera);
    }

    animate();
}



export const Greeting = () => {
    const [isShowNeon, setShowNeon] = useState(false);
    
    useEffect(() => {
        // setTimeout(() => {
        //     setShowNeon(!isShowNeon)
        // }, 500);

        runSphere();
    }, [ isShowNeon ]);
    
    return <div className={`relative h-screen bg-section_first bg-no-repeat bg-cover`}>
        <div className={`absolute bg-section_first_neon bg-no-repeat bg-cover ${ isShowNeon ? 'w-full h-screen' : ''}`}></div>

        <div className={"h-screen pb-5 flex flex-col justify-end bg-transparent items-center"}>
            <h1 className={"mb-5 text-6xl text-white"}>Hi, I'm Ratmir</h1>
            <canvas id="sphere" className={"absolute top-0 right-0 !w-[400px] !h-[200px] opacity-40"}></canvas>
        </div>
    </div>
}
