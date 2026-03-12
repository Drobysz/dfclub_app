import { cardTypes } from "@/interface";

export interface TimeProps {
	progress?: number;
	total_time: number;
	cardType: cardTypes;
	nbCourses: number;
}