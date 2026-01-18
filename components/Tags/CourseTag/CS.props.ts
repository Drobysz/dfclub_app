import { ReactNode } from "react";

export interface CSprops {
	type: "category" | "complexity" | "course_qntty" | "experience" | "time";
	children: ReactNode;
}