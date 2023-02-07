import React from "react";


export const OtherProgramming = () => {
    const List = `
        pl-5
    `;

    const ListItem = `
        mt-2
        mb-2
        list-disc
        text-lg

        max-lg:text-base
    `;

    const otherSkills = [
        {
            title: "Хакатоны",
            description: <ul className={List}>
                <li className={ListItem}>
                    WorldSkills:
                    <ul className={List}>
                        <li className={ListItem}>
                            <a href={`https://www.sgu.ru/structure/yablkol/news/2022-09-08/final-v-nacionalnogo-mezhvuzovskogo-chempionata`} className={`
                                text-xl
                                underline
                                max-lg:text-lg
                                max-s:text-base
                            `}>
                                The final of the V National Interuniversity Championship "Young professionals"
                            </a>
                            <span className={`
                                    ml-2
                                    text-lg
                                    text-amber-400
                                    max-s:text-base
                            `}>/ 2 место</span>
                        </li>

                        <li className={ListItem}>
                            <a href={`https://www.sgu.ru/news/2021-06-08/podvedeny-itogi-iv-chempionata-molodye-professionaly`} className={`
                                text-xl
                                underline
                                max-lg:text-lg
                                max-s:text-base
                            `}>
                                The final of the IV championship "Young professionals" according to the standards of "Worldskills"
                            </a>
                            <span className={`
                                ml-2
                                text-2xl
                              text-amber-400
                                no-underline
                                max-lg:text-lg
                                max-s:text-base
                            `}>/ 1 место</span>
                        </li>
                    </ul>
                </li>
                <li className={ListItem}>ICPC</li>
            </ul>
        }, 
        {
            title: "Medium & CodeWars",
            description: <ul className={List}>
                <li className={`mb-2`}>
                    <a href={''} className={`
                        text-3xl
                        underline
                        max-lg:text-xl
                    `}>Medium</a>
                </li>
                <li className={`mb-2`}>
                    <a href={''} className={`
                        text-3xl
                        underline
                        max-lg:text-xl
                    `}>CodeWars</a>
                </li>
            </ul>
        },
        {
            title: "Contact with me",
            description: <ul className={List}>
                <li className={`mb-2`}>
                    <a href={'https://t.me/kekw_k'} target={"_blank"} className={`
                        text-3xl
                        underline

                        max-lg:text-xl
                    `}>Telegram</a>
                </li>
                <li>
                    <a href={'mailto:kusainovratmir89@gmail.com'} target={"_blank"} className={`
                        text-3xl
                        underline

                        max-lg:text-xl
                    `}>Gmail</a>
                </li>
            </ul>
        }
    ];
    
    return <div className={`
        relative 
        min-h-screen 
        bg-section_fifth 
        bg-no-repeat 
        bg-cover
        max-s:bg-[25%]
        max-xs:bg-[25%]
        overflow-hidden
        flex
        flex-col
        justify-center

        max-lg:flex-col
    `}>
        <div className={`
            p-5
            bg-black/60
            max-s:bg-black/80
            max-s:p-0
            max-s:h-screen
            max-s:flex
            max-s:flex-col
            max-s:justify-center
        `}>
            {
                otherSkills.map((skill, idx) => {
                    return <div className={`
                    m-auto
                    p-5
                    w-[80%]                
                    mt-3
                    mb-3
                    font-unbounded
                    text-slate-50
                    max-lg:w-full
                `} key={idx}>
                
                    <p className={`
                        text-6xl
                        font-unbounded
                        max-lg:text-2xl
                        max-s:text-xl
                        pl-5
                        border-solid
                        border-l-8
                    `}>{skill.title}</p>

                        
                    <div className={`
                        pl-5
                        mt-5
                        overflow-hidden     
                        max-lg:mt-2
                    `}>
                        {skill.description}
                    </div>   
                </div>
                })
            }
        </div>
    </div>
}