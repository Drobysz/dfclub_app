'use client'

import { motion, useMotionValue } from "framer-motion";
import { SMBarProps } from "./SMbar.interface";
import { SMBlock } from "./components/index";
import styles from "./sm.module.scss"

export const SMbar = ({SMList}: SMBarProps)=> {
    const mouseX = useMotionValue(Infinity);

    return (
        <motion.nav 
            className={styles.smbar}
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