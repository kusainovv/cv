import React from "react";

const projects = [  
    [  {
        project_name: "QSell",
        role: "Frontend developer, Lead",
        responsibilities: [
            'Designed and implemented the frontend system',
            'Developed a frontend using React, React Context, React Hooks, Next.js, TypeScript, JavaScript, axios, emotion, Web API, i18n, moment, react-markdown', 
            'Wrote custom hooks and contexts',
            'Add the new functionals to company core',
            'Followed the correct work of CI/CD, Gitlab',
            'Refactored the code and optimize them',
            'Make the difficult requests, send images using built-in FormData object',
            'Add new functionals to application',
            'Communicated with backend developers and was active in the life of the project',
            'Wrote difficult functionals as drag and drop and other for frontend'
        ],
    }, {
        project_name: "Росссийский институт современного арбитража",
        role: "Frontend developer",
        responsibilities: [
            'Made the layout from Figma',
            'Developed a frontend using React, React Context, Redux, Storybook, Redux toolkit, Typescript, JavaScript, axios, styled-components, Web API, i18n, moment, react-visibility-sensor, react-markdown',
            'Wrote custom hooks and contexts',
            'Refactored the code and optimize them',
            'Add new functionals to application and supported previos functional',
            'Add new functionals to company core',
            'Communicated with developers and was active in the life of the project',
        ],
        link: "https://modernarbitration.ru"
    }, {
        project_name: "Совет современного арбитража (Young IMA)",
        role: "Frontend developer",
        responsibilities: [
            'Made the layout from Figma',
            'Developed a frontend using React, React Context, Typescript, JavaScript, Material-UI, axios, styled-components, Web API, i18n, moment, react-visibility-sensor, react-markdown, notistack',
            'Wrote custom hooks and contexts',
            'Refactored the code and optimize them',
            'Wrote difficult forms and write special eco-system for them',
            'Add new functionals to application and supported previos functional',
            'Communicated with developers and was active in the life of the project',
        ],
        link: "https://young.modernarbitration.ru"
    } ],
    [
        {
            project_name: "Winter academy",
            role: "Frontend developer",
            responsibilities: [
                'Made the layout from Figma',
                'Developed a frontend using React, React Context, Typescript, JavaScript, Material-UI, axios, CSS Modules, Web API, i18n, moment, notistack',
                'Wrote custom hooks and contexts',
                'Made difficult logic for UI and buisness logic layer',
                'Follow by perfomance of all project and update it',
                'Refactored the code and optimize them',
                'Wrote difficult forms and write special eco-system for them',
                'Add new functionals to application and supported previos functional',
                'Communicated with developers and was active in the life of the project',
            ],
            link: "https://academy.modernarbitration.ru/application"
        }, {
            project_name: "/DNA/ (Swedish project)",
            role: "Frontend developer",
            responsibilities: [
                'Made the layout from Figma',
                'Developed a frontend using React, React Context, Typescript, JavaScript, Mobx, Ant-Design, axios, emotion, i18n',
                'Used Mobx and splited all application code for it',
                'Follow by perfomance of all project and update it',
                'Refactored the code and optimize them',
                'Add new functionals to application and supported previos functional',
                'Communicated with swedish developers and was active in the life of the project',
            ]
        },
        {
            project_name: "YIMA",
            role: "Frontend Php developer",
            responsibilities: [
                'Added new functionals to WordPress',
                'Wrote PHP code with HTML, CSS, JavaScript',
                'Refactored the code and optimize them',
                'Add new functionals to application and supported previos functional',
                'Communicated with developers and was active in the life of the project',
            ]
        }
     ],
    [{
        project_name: "Widget for amoCRM",
        role: "Frontend developer",
        responsibilities: [
            'Created the new widget for amoCRM',
            'Wrote TypeScript code',
            'Refactored the code and optimize them',
            'Advanced work with TypeScript',
            'Communicated with developers and was active in the life of the project',
        ]
    },
    {
        project_name: "core.kus",
        role: "Main developer",
        responsibilities: [
            'This is my own written core',
            'Everything that i wrote before also suitable for this'
        ]
    } ]   
];

const bg = [
    'bg-section_second',
    'bg-section_third',
    'bg-section_fourd',
]

export const Projects = () => {
    return <div className={`
        relative
    `}>
        <h1 className={`
            sticky
            left-0
            top-0
            z-10
            p-3
            text-5xl
            font-network
            text-slate-50
            bg-black
            text-center
        `}>Projects</h1>

        <>
            { 
                projects.map((i, k) => {
                    
                    return  <div className={`
                        relative 
                        min-h-screen 
                        h-auto
                        ${bg[k]}
                        bg-no-repeat 
                        bg-cover
                        max-s:bg-[25%]
                        max-xs:bg-[25%]
                        overflow-hidden
                        flex
                        items-start
                        justify-center  
                        p-5
                        font-unbounded

                        max-md:flex
                        max-md:flex-col
                `}>
                    {
                        i.map(i => {
                            return <div className={`
                            bg-black/60
                              p-5
                              mr-1
                              ml-1
                              w-[33%]
                              min-h-[inherit]
                              word-break
                              flex
                              flex-col
                              justify-start
                              break-words
                              max-xl:bg-black/80
                              max-md:w-full
                              max-md:mt-5
                              max-md:mb-5
                              max-md:min-h-[auto]
                        `}>
                            <h1 className={`
                                min-h-[108px]
                                text-3xl
                                text-slate-50
                                font-unbounded
                                underline
                                mb-5
                                max-xl:text-xl
                                max-md:text-4xl
                                max-md:min-h-[0]
                                max-md:mb-3
                            `}>{i.project_name}</h1>
            
                            <p className={`
                                text-xl
                                min-h-[40px]
                                mb-5
                                text-slate-100
                                max-xl:text-base
                                max-md:text-xl
                            `}>
                                Role: <span>{i.role}</span>
                            </p>
            
                            
                            <p className={`
                                text-3xl
                                text-slate-50
                                mb-5
                                max-xl:text-base
                                max-md:text-lg
                            `}>
                                Responsibilities:
                            </p>
                                <ul className={`
                                    pl-5
                                    mb-5
                                `}>
                                    {i.responsibilities.map(rol => <li key={rol} className={`
                                        mt-5
                                        mb-5
                                        list-disc
                                        text-base
                                        text-slate-50
                                        font-thin
                                        max-xl:text-sm
                                        max-xl:mt-2
                                        max-xl:mb-2
                                    `}>{rol}</li>)}
                                </ul>
        
                                { i.link && <a href={i.link} target={"_blank"} rel={"norel noopener"} className={`
                                    text-slate-50
                                    w-fit
                                    text-4xl
                                    underline
                                    mb-0
                                    mt-auto
                                    max-xl:text-xl
                                `}>Go to application</a> }
                        </div>
                        })
                    }
                </div>
                })
            }
        </>
    </div>
}