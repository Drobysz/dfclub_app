"use client";

import { useState } from "react";
import { SectContainer } from "../../_components/SectContainer/SectContainer"
import {
	Title,
	Comments
} from "./_components";

export const Feedback = ()=> {
	const [idx, setIdx] = useState(0);

	return (
		<SectContainer
			className="flex flex-col gap-22"
		>
			<Title 
				idx={idx}
				setIdx={setIdx}
			/>
			<Comments idx={idx}/>
		</SectContainer>
	)
}