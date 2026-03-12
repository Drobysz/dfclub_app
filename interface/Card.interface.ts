export type complexities = "Легкая" | "Средняя" | "Сложная" | "Неизвестно";
export type cardTypes = "none" | "incompleted" | "finished";

export interface SpeakerProfile {
	name: string;
	occupation: string;
	avatar?: string; 
}