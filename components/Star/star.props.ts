import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface Starprops extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	note: number;
	className?: string;
	uid: string;
}