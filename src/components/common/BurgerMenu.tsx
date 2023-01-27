import React, { useEffect } from 'react';
import { useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import burger_menu from '../../../public/sections/air.jpg';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import smoke from '../../../public/smoke.png';

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { LuminosityShader  } from 'three/examples/jsm/shaders/LuminosityShader';
import {FilmPass} from 'three/examples/jsm/postprocessing/FilmPass';

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
    const camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);

    camera.rotation.x = 1.16;
    camera.rotation.z = 0.27;
    camera.rotation.y = -0.12;
    
    const cloudParticles = [];
    
    const ambient = new THREE.AmbientLight(0xc8caf7, 0);
    scene.add(ambient);

    const directionalLight = new THREE.DirectionalLight(0x7d1bcd);
    directionalLight.position.set(0,0,1);
    scene.add(directionalLight);

    const orangeLight = new THREE.PointLight(0xc8caf7, 50, 450, 1.7);
    orangeLight.position.set(200, 300, 100);
    scene.add(orangeLight);

    const redLight = new THREE.PointLight(0x2323b4, 50, 450, 1.7);
    redLight.position.set(100, 300, 100);
    scene.add(redLight);

    const blueLight = new THREE.PointLight(0xd281f5, 50, 450, 1);
    blueLight.position.set(300, 300, 200);
    scene.add(blueLight);

    const purpleLight = new THREE.PointLight(0x480575, 50, 450, 1.7);
    blueLight.position.set(3, 300, 100);
    scene.add(purpleLight);

    const renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('full_menu'),
    });

    renderer.setClearColor(0x000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const luminosityPass = new ShaderPass(LuminosityShader);
    composer.addPass(luminosityPass);

    const glitchPass = new GlitchPass();
    composer.addPass(glitchPass);

    const filmPass = new FilmPass(
        0.35,
        0.025,
        648,
        false
    );
    filmPass.renderToScreen = true;
    composer.addPass(filmPass);


    const loader = new THREE.TextureLoader();
    loader.load(smoke, (texture) => {
        const cloudGeo = new THREE.PlaneGeometry(500, 500);
        const cloudMaterial = new THREE.MeshLambertMaterial({
            map: texture,
            transparent: true
        });

        for (let i = 0; i < 50; i++) {
            let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
            cloud.position.set(
                Math.random() * 400,
                0,
                -100
            );

            cloud.rotation.x = 1.116;
            cloud.rotation.y = -0.012;
            cloud.rotation.z = Math.random()*2*Math.PI;
            cloud.material.opacity=1;
            cloudParticles.push(cloud);
            scene.add(cloud);
        }
    })


    function animate() {
        renderer.render(scene, camera);
        composer.render();
        cloudParticles.forEach(p => {
            p.rotation.z -= 0.001;
        })
        requestAnimationFrame(animate);
    }
      
    animate();
}



export const BurgerMenu = () => {
    const [isShowFullMenu, setShowFullMenu] = useState(false);

    useEffect(() => {
        if (!isShowFullMenu) {
            runBurgerMenu();
        }

        if (isShowFullMenu) {
            setTimeout(() => {
                runMainMenu();
            }, 1_000);
        }
    }, [ isShowFullMenu ]);

    return <>
        <div className={`
            fixed 
            w-screen  
            top-0 
            h-screen 
            bg-main_menu_background_texture 
            ${ isShowFullMenu ? 'left-[0px]' : 'left-[2000px]'} 
            duration-1000
        `}>
            <canvas id="full_menu">
            </canvas>
        </div>


        <canvas className={`fixed !w-[320px] rounded-full !h-[290px] top-0 right-0 translate-x-1/2 -translate-y-1/2 cursor-pointer`} onClick={() => {
            setShowFullMenu(!isShowFullMenu);
        }} id="burger_menu"></canvas>   
    </>   
}