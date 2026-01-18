import cn from "classnames";
import Locked from "@/assets/ locked.svg";
import Unlocked from "@/assets/ unlocked.svg";

export const AccessTag = ({ isAccessible }: { isAccessible: boolean })=> {
	const Icon = isAccessible ? Locked : Unlocked;
	const Label = isAccessible ? "Доступно" : "Заблокировано";
	const bg = isAccessible ? "bg-[#D7FFEB]" : "bg-[#FFCDCE]";

	return (
		<div className={cn("flex gap-2.5 items-center rounded-lg w-fit py-1 px-1.5", bg)}>
			<Icon />
			{Label}
		</div>
	)
}