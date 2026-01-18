import { Dispatch, ReactNode, SetStateAction } from "react";

export interface CheckBoxProps {
	setCheck: Dispatch<SetStateAction<boolean>>;
	checked: boolean;
	children: ReactNode;
}