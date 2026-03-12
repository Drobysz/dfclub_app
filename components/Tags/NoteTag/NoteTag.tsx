import { Star } from "../../Star/Star";
import { ModalWindow } from "@/components/index";
import styles from "./notetag.module.scss";
import cn from "classnames";

export const NoteTag = ({
	note,
	className
}: {
	note: number,
	className?: string;
})=> {
	const decoratedNote = String(note).replace('.', ',');

	return (
		<ModalWindow
			className={cn(
				styles.body,
				className
			)}
		>
			<Star
				note={note}
				uid={`rating-${note}-card-star`}
			/>
			<span>{decoratedNote}</span>
		</ModalWindow>
	)
}