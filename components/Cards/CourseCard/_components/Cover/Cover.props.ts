import { cardTypes } from "@/interface";

export interface CoverProps {
	isLiked: boolean;
	rating: number;
	img?: string;
	cardType: cardTypes;
}