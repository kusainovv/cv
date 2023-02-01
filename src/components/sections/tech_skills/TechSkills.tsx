import React, { useEffect } from "react";
import * as THREE from 'three';
import { runAnimation } from "../../../utils/runAnimation";
import character from '../../../../public/sections/tech_skills/cyborg.png';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';

const skills =  [
    'HTML', 'HTML5', 'CSS', 'CSS3', 'React', 'React Hooks', 'React Context', 'React-router', 'react-router-dom', 
    'react-router', 'Next.js', 'TypeScript', 'JSX', 'Redux', 'Redux Thunk', 'Mobx', 'Jquery', 'pug', 'Responsive design', 
    'Cross-Browser Development', 'Optimization', 'The Lighthouse', 'Web API',
    'Flexible Layout', 'Screen Reader', 'Material UI', 'Ant-Design', 'Tailwind', 'Babel', 'Formik', 'HTTP', 'Rest API', 'node.js', 'express.js', 
    'Mongo Data Base (MongoDB)', 'SVG', 'canvas', 'three.js', 'UX', 'UI', 'DOM',
    'CSS-IN-JS', 'emotion', 'styled-components', 'CSS Modules', 'React module css', 'SASS', 'SCSS', 'LESS', 'PostCSS',
    'CRA', 'Vite', 'Webpack', 'webpack-module-federation', 'axios', 'AJAX', 'ECMAScript', 'SPA', 'Single Project Application', 'SSR', 'Server Side Rendering', 
    'CI/CD', 'Bitbucket', 'Github', 'Gitlab', 'Figma', 'Photoshop', 'Unit testing', 'Jest', 'Integration testing', 'Enzyme', 'JSON', 'yarn', 'npm', 'flux',
    'Swagger', 'amoCRM', 'OOP / Object-oriented programming', 'FP /Functional programming', 'C#', 'Razor', 'Entity', 'Clojure', 'PHP', 'Laravel',
];

const runSphere = () => {

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),
    });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(2);
    camera.position.setY(2);
    camera.position.setX(0);
    
    renderer.render(scene, camera);

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    const glitchPass = new GlitchPass();
 
    composer.addPass(renderPass);
    composer.addPass(glitchPass);

    const geometry = new THREE.BoxGeometry(1,1,1);
    const material = new THREE.MeshBasicMaterial({ 
        map: new THREE.TextureLoader().load(character) 
    });
    
    const torus = new THREE.Mesh(geometry, material);
    torus.position.setY(2);


    const gridHelper = new THREE.GridHelper(200, 50);

    scene.add(torus, gridHelper);
    runAnimation(() => {
        composer.render(scene, camera);

        torus.rotation.x += 0.002;
        torus.rotation.y += 0.002;
        torus.rotation.z += 0.002;
    });
    
    const onWindowResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", onWindowResize, false);
}

export const TechSkills = () => {
    
    useEffect(() => {
        runSphere();
    }, []);

    return <div className={`
        relative 
        min-h-screen 
        flex
        flex-col
        bg-slate-60
        font-unbounded
    `}>

            <div className={`
                 relative
            `}>
                    
                <h1 className={`
                    pl-10
                    pb-10
                    pt-10
                    text-5xl
                  text-slate-100
                    underline
                  bg-black
                `}>My tech skills</h1>
                <canvas id="bg" className={`
                    left-0
                    top-0
                    !w-[100%]
                    h-inherit
                `}></canvas>
                <div className={`
                    absolute
                    w-auto
                    top-[10%]
                    p-5
                    bg-black/20
                `}>
                {/* 
                    gatsby, bootstrap, preact, storybook 
                    'e2e testing', 'WebdriverIO', no-code,
                    apolo, websocket
                */}
                {
                   skills.map((tech, idx) => <span key={idx} className={`
                      inline-block
                      m-1
                      p-2
                    bg-slate-50/70
                      text-base

                      max-lg:text-sm
                      max-lg:m-1
                      max-lg:p-1

                      max-m:text-xs
                      max-m:m-[2px]
                      max-m:p-[4px]

                      max-s:text-xs
                      max-s:m-[2px]
                      max-s:p-[4px]
                    `}>{tech}</span>)
                }
            </div>
        </div>
    </div>
}