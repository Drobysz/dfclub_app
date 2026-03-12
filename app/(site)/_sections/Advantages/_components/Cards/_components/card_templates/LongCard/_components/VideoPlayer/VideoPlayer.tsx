import styles from "./player.module.scss";
import Live from "@/assets/player/live.svg";
import {
	PlayerBar,
	Switcher,
	Cursor
} from "./_components";


export const VideoPlayer = ({
	hover
}: {
	hover: boolean
})=> {
	return (
		<div className="relative">
			<div className={styles.player_card}>
				<Live />
				<Cursor hover={hover} />
				<Switcher hover={hover} />
				<PlayerBar hover={hover} />
			</div>
			<div
				className={styles.background}
			/>
		</div>
	)
}