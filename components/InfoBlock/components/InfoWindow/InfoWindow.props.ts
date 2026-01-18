import { Dispatch, ReactNode, SetStateAction } from "react";

export interface InfoWindowProps {
	setExtended: Dispatch<SetStateAction<boolean>>
	extended: boolean;
	children: ReactNode;
}