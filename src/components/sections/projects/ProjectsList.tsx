import React from "react";
import { useTranslation } from "react-i18next";


export const ProjectsList = () => {
   
    const bg = [
        'bg-section_second',
        'bg-section_third',
        'bg-section_fourd',
    ]
    
    const { t } = useTranslation();

    const projects = [  
        [  {
            project_name: "QSell",
            role: "Frontend developer, Lead",
            responsibilities: [
                t('projects.designed_front'),
                `${t('projects.stack')}: React, React Context, React Hooks, Next.js, TypeScript, JavaScript, axios, emotion, Web API, i18n, moment, react-markdown`, 
                t('projects.custom_feature'),
                t('projects.feature_core'),
                t('projects.cicd'),
                t('projects.refactored_optimize'),
                t('projects.diff_request'),
                t('projects.add_support'),
                t('projects.communicate_backend'),
                t('projects.diff_front')
            ],
        }, {
            project_name: "Росссийский институт современного арбитража",
            role: "Frontend developer",
            responsibilities: [
                t('projects.from_figma'),
                `${t('projects.stack')}: React, React Context, Redux, Storybook, Redux toolkit, Typescript, JavaScript, axios, styled-components, Web API, i18n, moment, react-visibility-sensor, react-markdown`,
                t('projects.custom_feature'),
                t('projects.refactored_optimize'),
                t('projects.add_suport'),
                t('projects.feature_core'),
                t('projects.communicate'),
            ],
            link: "https://modernarbitration.ru"
        }, {
            project_name: "Совет современного арбитража (Young IMA)",
            role: "Frontend developer",
            responsibilities: [
                t('projects.from_figma'),
                `${t('projects.stack')}: React, React Context, Typescript, JavaScript, Material-UI, axios, styled-components, Web API, i18n, moment, react-visibility-sensor, react-markdown, notistack`,
                t('projects.custom_feature'),
                t('projects.refactored_optimize'),
                t('projects.eco_form'),
                t('projects.add_suport'),
                t('projects.communicate'),
            ],
            link: "https://young.modernarbitration.ru"
        } ],
        [
            {
                project_name: "Winter academy",
                role: "Frontend developer",
                responsibilities: [
                    t('projects.from_figma'),
                    `${t('projects.stack')}: using React, React Context, Typescript, JavaScript, Material-UI, axios, CSS Modules, Web API, i18n, moment, notistack`,
                    t('projects.custom_feature'),
                    t('projects.diff_logic'),
                    t('projects.follow_perfomance'),
                    t('projects.refactored_optimize'),
                    t('projects.eco_form'),
                    t('projects.add_suport'),
                    t('projects.communicate'),
                ],
                link: "https://academy.modernarbitration.ru/application"
            }, {
                project_name: "/DNA/ (Swedish project)",
                role: "Frontend developer",
                responsibilities: [
                    t('projects.from_figma'),
                    `${t('projects.stack')}: using React, React Context, Typescript, JavaScript, Mobx, Ant-Design, axios, emotion, i18n`,
                    t('projects.mobx_split'),
                    t('projects.follow_perfomance'),
                    t('projects.refactored_optimize'),
                    t('projects.add_suport'),
                    t('projects.communicate_abroad'),
                ]
            },
            {
                project_name: "YIMA",
                role: "Frontend Php developer",
                responsibilities: [
                    t('projects.wordpress_functional'),
                    t('projects.php_exp'),
                    t('projects.refactored_optimize'),
                    t('projects.add_suport'),
                    t('projects.communicate'),
                ]
            }
         ],
        [{
            project_name: "Widget for amoCRM",
            role: "Frontend developer",
            responsibilities: [
                t('projects.widget_amocrm'),
                t('projects.advanced_ts'),
                t('projects.refactored_optimize'),
                t('projects.communicate'),
            ]
        },
        {
            project_name: "core.kus",
            role: "Main developer",
            responsibilities: [
                t('projects.my_core'),
                t('projects.core_suitable')
            ]
        } ]   
    ];
   
   return <>
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

                      transition
                      ease-linear
                      duration-300          
                      cursor-pointer 
                    hover:bg-black
                      hover:transition-[10s]
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
}