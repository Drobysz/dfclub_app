"use client";

import { useState } from "react";
import { SectContainer } from "../../_components/SectContainer/SectContainer"
import {
	Title,
	Comments
} from "./_components";

export interface SwitchProps {
	idx: number;
	direction: "left" | "right" | null;
};

export const Feedback = ()=> {
	const [swtch, setSwitch] = useState<SwitchProps>({
		idx: 0,
		direction: null
	});

	return (
		<SectContainer
			className="flex flex-col gap-22"
		>
			<Title 
				idx={swtch.idx}
				setSwitch={setSwitch}
			/>
			<Comments swtch={swtch}/>
		</SectContainer>
	)
}