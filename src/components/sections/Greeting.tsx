import React, { useState, useEffect } from "react";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import burger_menu from '../../../public/sections/air.jpg';


function runBurgerMenu() {
    const scene = new THREE.Scene();

    console.warn()
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


export const Greeting = () => {
    const [isShowNeon, setShowNeon] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            // setShowNeon(!isShowNeon);
        }, 500);
        runBurgerMenu();
    }, [ isShowNeon ]);

    return <div className={`relative h-screen bg-section_first bg-no-repeat bg-cover`}>
        <div className={`absolute bg-section_first_neon bg-no-repeat bg-cover ${ isShowNeon ? 'w-full h-screen' : ''}`}></div>

        <div className={"h-screen pb-3 flex flex-col justify-end bg-transparent items-center"}>
            <h1 className={"relative font-network text-6xl text-white overflow-hidden"}>
                Hi, I'm Ratmir
            </h1>

            <p className={'pb-5 font-unbounded text-xl text-cyan-200'}>Scroll down & join the portfolio</p>
            
            <div className={`mt-2`}>
                <div className={`
                    w-[30px] h-[50px] bg-transparent border-solid border-2 border-white rounded-[22px]
                    flex flex-col justify-center items-center overflow-hidden
                `}>
                    <div className={`relative top-0 animate-scroll`}>
                        <div className={`
                            w-[10px]
                            h-[10px]
                            bg-transparent
                            border-r-2
                            border-l-cyan-100
                            border-b-2
                            rotate-45
                            border-t-cyan-100
                        `}></div>

                        <div className={`
                            w-[10px]
                            h-[10px]
                            bg-transparent
                            border-r-2
                            border-l-cyan-100
                            border-b-2
                            rotate-45
                            border-t-cyan-100
                        `}></div>

                        <div className={`
                            w-[10px]
                            h-[10px]
                            bg-transparent
                            border-r-2
                            border-l-cyan-100
                            border-b-2
                            rotate-45
                            border-t-cyan-100
                        `}></div>
                    </div>
                </div>

                <div className={'m-auto mt-2 w-[8px] h-[8px] bg-cyan-200 rounded-[22px] opacity-50'}></div>


                <canvas className={`fixed !w-[320px] rounded-full !h-[290px] top-0 right-0 translate-x-1/2 -translate-y-1/2 cursor-pointer`} id="burger_menu"></canvas>
                {/* // make burger menu using three.js in right top */}
            </div>
        </div>
    </div>
}
