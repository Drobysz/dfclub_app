import { SBprops } from "./SB.props";
import cn from "classnames";

export const SubscribeBody = ({ bgColor, children }: SBprops)=> {
	return (
		<div className={cn(
			"p-8 h-fit w-[inherit] rounded-[inherit] flex flex-col gap-6", {
				["bg-gray-800"]: bgColor == "dark",
				["bg-primary-100"]: bgColor == "green"
			}
		)}>
			{children}
		</div>
	)
}