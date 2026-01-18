import User from "@/assets/user.svg";
import styles from "./pi.module.scss";
import cn from "classnames";

export const ProfileIcon = ({ src }: { src?: string })=> {
	return (
		<div className={cn(
			styles.user_icon_ring,
			"border-primary-300"
		)}>
			<div className={cn(
				styles.user_icon,
				"bg-primary-100 text-primary-500"
			)}>
				{src == undefined && <User />}
				{src != undefined && <div
					className="w-full h-full"
					style={{ backgroundImage: `url("${src}")` }}
				/>}
			</div>
		</div>
	)
}