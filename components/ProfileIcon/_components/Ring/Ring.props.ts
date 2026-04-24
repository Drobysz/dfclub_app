import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface RingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    size: "middle" | "small"
}