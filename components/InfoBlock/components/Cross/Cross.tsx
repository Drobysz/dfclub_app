import CrossIcon from "@/assets/Plus.svg";
import cn from "classnames";
import styles from "../../ib.module.scss";

export const Cross = ({ rotation }: { rotation: string })=> {
	return (
		<div className="flex items-center w-fit">
			<CrossIcon className={cn(
				styles.cross,
				"text-primary-500",
				rotation
			)}/>
		</div>
	)
}