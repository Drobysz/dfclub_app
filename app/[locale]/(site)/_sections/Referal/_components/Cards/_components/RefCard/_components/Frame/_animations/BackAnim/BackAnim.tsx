import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { anims } from "./animations";
import { BackAnimProps } from './BackAnim.props';
import styles from "./ba.module.scss";

export const BackAnim = ({ order, isHovered }: BackAnimProps)=> {
	return (
		<>
			{isHovered &&
				<DotLottieReact
					src={anims[order]}
					loop
					autoplay
					className={styles.back_img}
				/>
			}
		</>
	)
}