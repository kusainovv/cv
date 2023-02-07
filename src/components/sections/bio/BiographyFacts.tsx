import React from "react";
import { useTranslation } from "react-i18next";



export const BiographyFacts = () => {
    const { t } = useTranslation();

    return <>
        {
            [
                { type: 'text', label: t('bio.education') },
                { type: 'text', label: t('bio.place') },
                { type: 'text', label: t('bio.english_level') },
                { type: 'text', label: t('bio.russian_level') },
                { type: 'text', label: t('bio.commercial_exp') },
                { type: 'link', label: `LinkedIn ${t('bio.linkedIn')}`, link: "https://www.linkedin.com/in/%D1%80%D0%B0%D1%82%D0%BC%D0%B8%D1%80-%D0%BA%D1%83%D1%81%D0%B0%D0%B8%D0%BD%D0%BE%D0%B2-b67b5a257/" }
            ].map((label, idx) => {
                    const text = `${label.label.includes('-') ? '-' : ''} ${label.label.split('-').slice(1).join(' ')}`;
                    return <div key={idx} className={`
                            mb-5
                            text-xl
                          text-slate-200
                            font-unbounded   

                            max-xl:text-lg
                            max-s:text-sm
                        `}>
                    { 
                        label.type === 'text'
                        ? <>
                            <span className={`
                                    text-xl
                                  text-cyan-200
                                    underline

                                    max-xl:text-lg
                                    max-s:text-base
                                `}>{`${label.label.split('-')[0]}`}</span>
                            <span>{text}</span>
                        </>
                        : 
                            <a href={label.link} target={'_blank'} className={`
                                    text-xl
                                text-cyan-200
                                    underline

                                    max-xl:text-lg
                                    max-s:text-base
                                `}>
                                {`${label.label.split('-')[0]}`}
                            </a>
                        
                    }
            </div>
            })
        }
    </>
}