import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface GCprops extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    duration?: number;
    clockwise?: boolean;
    className?: string; 
};

export enum Direction {
    top, 
    right,
    bottom,
    left
};