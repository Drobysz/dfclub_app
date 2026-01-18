import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ProjBtnProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	colorSet?:  "gr_lgt" | "gr_md" | "gr_dk" | "gr_ghost" | "gr_trsp" | "gr_demi_trsp" | "gray_lgt" | "gray_dk";
	size?:	    "large" | "medium" | "small";
	icon?:	    "thunder" | "copy" | "download" | "none";
	iconColor?: "green" | "white";
	className?: string;
	children:   ReactNode;
	full?: 		boolean;
}