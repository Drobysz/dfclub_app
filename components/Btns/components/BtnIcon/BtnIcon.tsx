import Copy from "@/assets/copy.svg";
import Download from "@/assets/download.svg";
import Thunder from "@/assets/flash.svg";

import { BtnIconProps } from "./BtnIcon.props";

export const BtnIcon = ({
	color = "white",
	icon
}: BtnIconProps)=> {
	const colors = {
		"green": "text-primary-500",
		"white": "text-white"
	}

	const iconTag = {
		"copy":     <Copy className={colors[color]}/>,
		"thunder":  <Thunder className={colors[color]}/>,
		"download": <Download className={colors[color]}/>
	}

	return iconTag[icon];
}