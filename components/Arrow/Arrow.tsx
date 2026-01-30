import { ArrowProps } from "./Arrow.props";
import ArrowIcon from "@/assets/arrow-right-1.svg";
import cn from "classnames";

export const Arrow = ({
	mode="light",
	dir,
	className,
	...props
}: ArrowProps)=> {
	return (
		<div
			{...props}
			className={cn(
				className,
				"rounded-full w-10 h-10 cursor-pointer",
				"flex justify-center items-center",
				"active:opacity-85 active:scale-[0.97] hover:scale-[1.04]",
				"transition-[opacity,transform] ease-out",
				"duration-500", {
					["text-gray-500 bg-gray-100"]: mode === "light",
					["text-white bg-gray-800"]: mode === "dark",
					["rotate-180"]: dir === "l"
				}
			)}
		>
			<ArrowIcon/>
		</div>
	)
}