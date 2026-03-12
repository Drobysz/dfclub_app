import { cardTypes, complexities, SpeakerProfile } from "@/interface";

export interface CourseCardProps {
	category?: string;
	total_time: number;
	time_completed?: number;
	cardType: cardTypes;
	rating: number;
	complexity?: complexities;
	nbCourses: number;
	title: string;
	liked: boolean;
	img?: string;
	speaker: SpeakerProfile;
}