'use client'

import { motion, useMotionValue } from "framer-motion";
import { SMBarProps } from "./SMbar.interface";
import { SMBlock } from "./components/index";
import cn from "classnames";

export const SMbar = ({SMList}: SMBarProps)=> {
    const mouseX = useMotionValue(Infinity);

    return (
        <motion.nav 
            className={cn(
                "flex items-end justify-between",
                "gap-3 h-10 rounded-2xl",
                "px-1.5 pb-2",
                "w-fit"
            )}
            onMouseMove={(e)=> mouseX.set(e.pageX)}
            onMouseLeave={()=> mouseX.set(Infinity)}
        >
            {SMList.map(({title, link, img})=> (
                <SMBlock 
                    key={`id-${title}`} 
                    title={title}
                    link={link}
                    img={img}
                    mouseX={mouseX}
                />
            ))}
        </motion.nav>
    );
};