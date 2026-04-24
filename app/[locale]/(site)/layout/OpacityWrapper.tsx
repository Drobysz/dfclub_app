"use client";

import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { useContext } from "react";
import { SiteContext } from "../context/site.context";
import cn from 'classnames';

interface OWInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: ReactNode
}

export const OpacityWrapper = ({children, className, ...props}: OWInterface)=> {
    const { isModalWindowOpen } = useContext(SiteContext)

    return (
        <div 
            {...props}
            className={cn(className, { 
                ['pointer-events-none blur-sm']: isModalWindowOpen
            })}
        >
            {children}
        </div>
    );
};