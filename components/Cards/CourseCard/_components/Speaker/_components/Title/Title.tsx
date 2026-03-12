import { TitleProps } from "./Title.props";
import cn from "classnames";
import styles from "./title.module.scss";
import { prime_regular } from "@/fonts/fonts";

export const Title = ({
	name,
	occupation
}: TitleProps)=> {
	return (
		<div className={cn(
			styles.body,
			prime_regular.className
		)}>
			<h4 className="text-gray-900">
				{name}
			</h4>
			<p className="text-gray-600 self-end">
				{occupation}
			</p>
		</div>
	)
}