"use client";

import { useState } from "react";
import { 
	Content, CheckBoxBody
} from "./components/index";

export const CheckBox = ({
	type
}: {
	type: "over-category" | "sub-category"
})=> {
	const [checked, setCheck] = useState(false);

	return (
		<CheckBoxBody
			checked={checked}
			setCheck={setCheck}
		>
			<Content
				checked={checked}
				type={type}
			/>
		</CheckBoxBody>
	)
}