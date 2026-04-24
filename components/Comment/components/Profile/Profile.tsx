import { ProfileIcon } from "@/components/index";
import { prime_medium } from "@/fonts/fonts";
import cn from "classnames";

export const Profile = ({ name }: { name: string })=> {
	return (
		<div className="flex gap-4 items-center">
			<ProfileIcon
				isActive={false}
			/>
			<span className={cn(
				prime_medium.className,
				"text-gray-900"
			)}>
				{name}
			</span>
		</div>
	)
}