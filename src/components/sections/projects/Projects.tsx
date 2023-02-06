import React from "react";
import { ProjectsList } from "./ProjectsList";

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

            max-lg:text-4xl
            max-md:text-3xl
        `}>Projects</h1>

        <ProjectsList />
    </div>
}