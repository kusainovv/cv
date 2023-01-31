import React, { useEffect } from "react";
import character from '../../../../public/sections/bio/me.png';
import cloud from '../../../../public/sections/cloud.svg';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { LuminosityShader } from 'three/examples/jsm/shaders/LuminosityShader';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';
import { runAnimation } from '../../../utils/runAnimation';
import smoke_texture from '../../../../public/smoke.png';
import { Indicator } from "../../common/Indicator/Indicator";

const runFog = () => {
    const scene = new THREE.Scene();

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
        canvas: document.getElementById('fog'),
    });
    
    renderer.setClearColor(0x000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    
    
    
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    const luminosityPass = new ShaderPass(LuminosityShader);
    const filmPass = new FilmPass(0.35, 0.025, 648, false);

    composer.addPass(filmPass);
    composer.addPass(renderPass);
    composer.addPass(luminosityPass);
    
    
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
            cloud.material.opacity = 0.035
            cloudParticles.push(cloud);
            scene.add(cloud);
        }
    })
    
    
    runAnimation(() => {
        composer.render(scene, camera);
        cloudParticles.forEach(p => {
            p.rotation.z -= 0.0008;
        })
    })
    
}


export const Biography = () => {

    useEffect(() => {
        runFog();
    }, []);

    return <div className={`
        relative 
        h-screen 
        bg-section_second 
        bg-no-repeat 
        bg-cover
        max-s:bg-[25%]
        max-xs:bg-[25%]
        overflow-hidden
        flex
        items-center
        justify-center
    `}>
        <img src={character} className={`
            w-[544px]
            right-[10%]
            mt-auto
        `} />

        <div className={`
            z-10
            w-[500px]
            color-slate-500
            box-content
            ml-[50px]
       
            bg-black/60
            rounded-br-[50%]
        `}>

                <Indicator />

                <div className={`
                    p-[10px]
                `}>
                    <h1 className={`
                        text-4xl
                        text-amber-200
                        font-unbounded
                        w-fit
                        underline
                    `}>My name is Ratmir</h1>
                    <h2 className={`
                        mt-1
                        text-2xl
                        text-cyan-200
                        font-unbounded
                    `}>I'm 19 year</h2>

                    
                    <p className={`
                        mt-5
                        mb-5
                        text-base
                        text-slate-200
                        font-unbounded   
                    `}>
                        Я Front-end разработчик с желанием совершенствоваться, получать новые задачи, изучать новые технологии, применять новые подходы и стать хорошим разработчиком. 
                    </p>


                    {
                        [
                            'Education - specialized secondary education (IT)',
                            'Place - Russia, Saratov',
                            'English - B2',
                            'Russian - Native'
                        ].map(label => <div className={`
                            mb-5
                            text-xl
                        text-slate-200
                            font-unbounded   
                        `}>
                            <span className={`
                                text-xl
                            text-cyan-200
                                underline
                            `}>{label.split(' ')[0]}</span>
                            {` ${label.split(' ').slice(1).join(' ')}`}
                        </div>)
                    }
                </div>
        </div>

        <canvas id="fog" className={`
            absolute
            w-[100%]
            h-[100%]
        `}></canvas>
    </div>
}