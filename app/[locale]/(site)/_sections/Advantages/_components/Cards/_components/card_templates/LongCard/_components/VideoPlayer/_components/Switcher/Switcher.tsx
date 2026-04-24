import cn from "classnames";
import styles from "./switcher.module.scss";
import PauseLarge from "@/assets/player/pause_large.svg";
import ResumeLarge from "@/assets/player/resume_large.svg";
import Pause from "@/assets/player/pause.svg";
import Resume from "@/assets/player/resume.svg";

export const Switcher = ({
	hover,
	size="large"
}: {
	hover: boolean,
	size?: "large" | "small"	
})=> {
	const playStyles = !hover ? styles.appeared : styles.concealed;
	const pauseStyles = hover ? styles.appeared : styles.concealed;

	return (
		<div className={cn(size === "large" ? styles.centralize : "")}>
			<div className="relative">
				<div
					className={cn(
						pauseStyles,
						styles.smooth_style
					)}
				>
					{size === "large" ? <PauseLarge /> : <Pause /> }
				</div>
				<div
					className={cn(
						playStyles,
						styles.smooth_style
					)}
				>
					{size === "large" ? <ResumeLarge /> : <Resume /> }
				</div>
			</div>
		</div>
	)
}