import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { LuminosityShader } from 'three/examples/jsm/shaders/LuminosityShader';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';
import { runAnimation } from '../../../utils/runAnimation';

import burger_menu from '../../../../public/sections/air.jpg';
import smoke_texture from '../../../../public/smoke.png';

export const getBurgerMenuAnimation = () => {
    const scene = new THREE.Scene();
    
    return {
        showFullMenu() {
            const camera = new THREE.PerspectiveCamera(95, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.rotation.x = 1.16;
            camera.rotation.z = 0.27;
            camera.rotation.y = -0.12;



    
            const ambient = new THREE.AmbientLight(0xc8caf7, 0);
            scene.add(ambient);

    
            const directionalLight = new THREE.DirectionalLight(0x7d1bcd);
            directionalLight.position.set(0, 0, 1);
            scene.add(directionalLight);
    



            const orangeLight = new THREE.PointLight(0xc8caf7, 50, 450, 1.7);
            orangeLight.position.set(200, 300, 100);

            const redLight = new THREE.PointLight(0x2323b4, 50, 450, 1.7);
            redLight.position.set(100, 300, 100);

            const blueLight = new THREE.PointLight(0xd281f5, 50, 450, 1);
            blueLight.position.set(300, 300, 200);

            const purpleLight = new THREE.PointLight(0x480575, 50, 450, 1.7);
            blueLight.position.set(3, 300, 100);
    
            scene.add(orangeLight, redLight, blueLight, purpleLight);

            


            const renderer = new THREE.WebGLRenderer({
                canvas: document.getElementById('full_menu'),
            });
    
            renderer.setClearColor(0x000, 0);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
    



            const composer = new EffectComposer(renderer);
            const renderPass = new RenderPass(scene, camera);
            const luminosityPass = new ShaderPass(LuminosityShader);
            const glitchPass = new GlitchPass();
            const filmPass = new FilmPass(0.35, 0.025, 648, false);
            filmPass.renderToScreen = true;
  
            composer.addPass(filmPass);
            composer.addPass(renderPass);
            composer.addPass(luminosityPass);
            composer.addPass(glitchPass);

            

            const cloudParticles = [];
            new THREE.TextureLoader().load(smoke_texture, (texture) => {
                const cloudGeo = new THREE.PlaneGeometry(500, 500);
                const cloudMaterial = new THREE.MeshLambertMaterial({ map: texture, transparent: true });
    
                for (let cloudOrder = 0; cloudOrder < 50; cloudOrder++) {
                    const cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
                    cloud.position.set(Math.random() * 400, 0, -100);
                    cloud.rotation.x = 1.116;
                    cloud.rotation.y = -0.012;
                    cloud.rotation.z = Math.random() * 2 * Math.PI;
                    cloud.material.opacity = 1;
                    cloudParticles.push(cloud);
                    scene.add(cloud);
                }
            })
    
    
            runAnimation(() => {
                composer.render(scene, camera);
                cloudParticles.forEach(p => {
                    p.rotation.z -= 0.001;
                })
            })

        },
        

        showButtonMenu() {
            const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
    
            
            scene.fog = new THREE.Fog(0x5a382e, 50, 1);



            const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('burger_menu') });
            renderer.setClearColor(0x000, 0);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.position.setZ(30);
    



            const geometry = new THREE.SphereGeometry(15, 32, 16);
            const material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(burger_menu) });
            const sphere = new THREE.Mesh(geometry, material);
            scene.add(sphere);

            if (document.body && document.getElementById('burger_menu')) {
                const burger_menu = document.getElementById('burger_menu');

                burger_menu.addEventListener('mouseenter', () => {
                    scene.fog = null;
                });
    
                burger_menu.addEventListener('mouseleave', () => {
                    scene.fog = new THREE.Fog(0x5a382e, 50, 1);
                });
            }

    
            const controls = new OrbitControls(camera, renderer.domElement);
    
            runAnimation(() => {
                sphere.rotation.x += 0.002;
                sphere.rotation.y += 0.002;
                sphere.rotation.z += 0.004;
                renderer.render(scene, camera);
                controls.update();
            });
        }
        
    }
}