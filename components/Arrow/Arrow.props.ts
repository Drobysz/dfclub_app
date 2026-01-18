import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ArrowProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	mode?: "light" | "dark";
	dir:   "r" | "l"
}