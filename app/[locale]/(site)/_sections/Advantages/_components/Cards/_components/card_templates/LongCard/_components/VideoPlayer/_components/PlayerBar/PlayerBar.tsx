import styles from "./bar.module.scss";
import Volume from "@/assets/player/volume.svg";
import Scale from "@/assets/player/scale.svg";
import Settings from "@/assets/player/setting.svg";
import cn from "classnames";
import {
	Switcher
} from "../Switcher/Switcher";
import { prime_regular } from "@/fonts/fonts";

export const PlayerBar = ({
	hover
}: {
	hover: boolean
})=> {
	return (
		<div
			className={styles.bar}
		>
			<div
				className={styles.progress_line}
			/>
			<div className="flex justify-between">
				<div className="flex gap-4">
					<div className="flex gap-6">
						<Switcher
							hover={hover}
							size="small"
						/>
						<Volume />
					</div>
					<span className={cn(
						prime_regular.className,
						"text-gray-950 text-[0.625rem]"
					)}>
						34:23/ 1:27:12
					</span>
				</div>
				<div className="flex gap-2">
					<Settings />
					<Scale />
				</div>
			</div>
		</div>
	)
}