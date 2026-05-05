export type complexities = "Легкая" | "Средняя" | "Сложная" | "Неизвестно";
export type cardTypes = "none" | "incompleted" | "finished";

export interface SpeakerProfile {
	name: string;
	occupation: string;
	avatar?: string; 
}

export interface CourseCardData {
	id: number;
	createdAt: string;
	category: string;
	total_time: number;
	time_completed?: number;
	cardType: cardTypes;
	rating: number;
	complexity?: complexities;
	nbCourses: number;
	title: string;
	liked: boolean;
	speaker: SpeakerProfile;
}