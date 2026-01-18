import { Star } from "../../Star/Star";
import { ModalWindow } from "@/components/index";

export const NoteTag = ({ note }: { note: number })=> {
	const decoratedNote = String(note).replace('.', ',');

	return (
		<ModalWindow className="flex gap-2 items-center p-3 w-fit">
			<Star note={note}/>
			<span>{decoratedNote}</span>
		</ModalWindow>
	)
}