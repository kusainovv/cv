import React from "react";
import { useTranslation } from "react-i18next";



export const BiographyFacts = () => {
    const { t } = useTranslation();

    return <>
        {
            [
                t('bio.education'),
                t('bio.place'),
                t('bio.english_level'),
                t('bio.russian_level'),
                t('bio.commercial_exp')
            ].map((label, idx) => <div key={idx} className={`
                            mb-5
                            text-xl
                          text-slate-200
                            font-unbounded   

                            max-xl:text-lg
                            max-s:text-sm
                        `}>
                <span className={`
                                text-xl
                              text-cyan-200
                                underline

                                max-xl:text-lg
                                max-s:text-base
                            `}>{label.split('-')[0]}</span>
                {`- ${label.split('-').slice(1).join(' ')}`}
            </div>)
        }
    </>
}