import React, { useEffect } from "react";
import character from '../../../../public/sections/bio/me.png';
import { Indicator } from "../../common/Indicator/Indicator";
import { useTranslation } from "react-i18next";
import { BiographyFacts } from "./BiographyFacts";
import { runFog } from "../../../animation/Fog";


export const Biography = () => {
    useEffect(() => {
        runFog(document.getElementById('fog'), 0.035);
    }, []);

    const { t } = useTranslation();

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

        max-lg:flex-col
    `}>
        <img src={character} className={`
            max-w-[544px]
            right-[10%]
            mt-auto

            max-xl:w-[440px]

            max-lg:rounded-br-[0]
            max-lg:w-[100%]
            max-lg:absolute
            max-lg:bottom-[0]
            max-lg:right-[0]

            max-s:w-[100%]
            max-s:bottom-[0%]

            max-xs:translate-y-[-50%]
        `} />

        <div className={`
            z-10
            w-[500px]
            color-slate-500
            box-content
            ml-[50px]
            transition-[10s]
            bg-black/60
            rounded-br-[50%]

            max-xl:ml-[0px]
            max-lg:w-full
            max-lg:rounded-br-[0]
            max-lg:mt-auto
        `}>
                <Indicator />
            
                <div className={`
                    p-[10px]
                    max-lg:pl-[30px]
                    max-lg:w-[50%]
                    max-sm:w-[100%]
               `}>
                    <h1 className={`
                        text-4xl
                        text-amber-200
                        font-unbounded
                        w-fit
                        underline

                        max-xl:text-3xl
                        max-xs:text-xl
                        max-s:text-lg
                    `}>{t('bio.my_name_is_ratmir')}</h1>

                    <h2 className={`
                        mt-1
                        text-2xl
                        text-cyan-200
                        font-unbounded

                        max-xl:text-xl
                        max-xs:text-xl

                        max-s:text-base
                        max-s:mt-0
                    `}>{t('bio.age')}</h2>

                    
                    <p className={`
                        mt-5
                        mb-5
                        text-base
                        text-slate-200
                        font-unbounded   

                        max-xl:text-sm
                        max-s:text-sm
                    `}>
                        {t('bio.description')}
                    </p>


                    <BiographyFacts />
                </div>
        </div>

        <canvas id="fog" className={`
            absolute
            w-[100%]
            h-[100%]
        `}></canvas>
    </div>
}