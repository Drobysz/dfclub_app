"use client";

import { IBprops } from "./IB.props";
import { useState } from "react";
import { prime_semibold } from "@/fonts/fonts";
import {
	InfoParagraph,
	InfoWindow,
	Cross
} from "./components/index";

export const InfoBlock = ({ title, text }: IBprops)=> {
	const [extended, setExtended] = useState(false);
	const rotation = extended ? "rotate-45" : "rotate-0";
	const txtApp = extended ? "max-h-40 opacity-100" : "max-h-0 opacity-0"

	return (
		<InfoWindow
			extended={extended}
			setExtended={setExtended}
		>
			<div className="flex justify-between">
				<h2 className={prime_semibold.className}>
					{title}
				</h2>
				<Cross rotation={rotation}/>
			</div>
			<InfoParagraph
				textAppearance={txtApp}
			>
				{text}
			</InfoParagraph>
		</InfoWindow>
	)
}