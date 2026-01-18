import { HeaderProps } from "./Header.props";
import { Rating } from "@/components/index";
import { prime_regular } from "@/fonts/fonts";
import cn from "classnames";

export const Header = ({ note, date }: HeaderProps)=> {
	const cnvDate = new Date(date * 1000);
	const d = String(cnvDate.getDay()).padStart(2, '0');
	const m = String(cnvDate.getMonth()).padStart(2, '0');
	const y = String(cnvDate.getFullYear()).padStart(2, '0');

	return (
		<div className="flex justify-between items-center">
			<Rating rating={note} />
			<span className={cn(
				prime_regular.className,
				"text-gray-700"
			)}>
				{d}.{m}.{y}
			</span>
		</div>
	)
}