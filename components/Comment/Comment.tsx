import { CommentProps } from "./Comment.props";
import { ModalWindow } from "../index";
import { 
	Header,
	Profile,
	Text
} from "./components/index";

export const Comment = ({
	date,
	note,
	name, 
	course,
	comment
}: CommentProps)=> {
	return (
		<ModalWindow
			tag="section"
			className="p-8 flex flex-col gap-8 w-141 h-93"
		>
			<Header
				date={date}
				note={note}
			/>
			<Profile name={name}/>
			<Text 
				title={course}
				comment={comment}
			/>
		</ModalWindow>
	)
}