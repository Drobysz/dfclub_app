import styles from "./cursor.module.scss";
import CursorIcon from "@/assets/player/cursor.svg";
import cn from "classnames";

export const Cursor = ({hover}: {hover: boolean})=> {
	return (
		<div className={cn(
			styles.centralize,
			"transition-all duration-300 ease-in-out",
			!hover && "translate-x-15 translate-y-3"
		)}>
			<CursorIcon />
		</div>
	)
}